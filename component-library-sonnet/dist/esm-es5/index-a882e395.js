var candidateSelectors = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');
var matches = typeof Element === 'undefined'
    ? function () { }
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
function tabbable(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = el.querySelectorAll(candidateSelector);
    if (options.includeContainer) {
        if (matches.call(el, candidateSelector)) {
            candidates = Array.prototype.slice.apply(candidates);
            candidates.unshift(el);
        }
    }
    var i, candidate, candidateTabindex;
    for (i = 0; i < candidates.length; i++) {
        candidate = candidates[i];
        if (!isNodeMatchingSelectorTabbable(candidate))
            continue;
        candidateTabindex = getTabindex(candidate);
        if (candidateTabindex === 0) {
            regularTabbables.push(candidate);
        }
        else {
            orderedTabbables.push({
                documentOrder: i,
                tabIndex: candidateTabindex,
                node: candidate,
            });
        }
    }
    var tabbableNodes = orderedTabbables
        .sort(sortOrderedTabbables)
        .map(function (a) { return a.node; })
        .concat(regularTabbables);
    return tabbableNodes;
}
tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;
function isNodeMatchingSelectorTabbable(node) {
    if (!isNodeMatchingSelectorFocusable(node)
        || isNonTabbableRadio(node)
        || getTabindex(node) < 0) {
        return false;
    }
    return true;
}
function isTabbable(node) {
    if (!node)
        throw new Error('No node provided');
    if (matches.call(node, candidateSelector) === false)
        return false;
    return isNodeMatchingSelectorTabbable(node);
}
function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled
        || isHiddenInput(node)
        || isHidden(node)) {
        return false;
    }
    return true;
}
var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
    if (!node)
        throw new Error('No node provided');
    if (matches.call(node, focusableCandidateSelector) === false)
        return false;
    return isNodeMatchingSelectorFocusable(node);
}
function getTabindex(node) {
    var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
    if (!isNaN(tabindexAttr))
        return tabindexAttr;
    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if (isContentEditable(node))
        return 0;
    return node.tabIndex;
}
function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}
function isContentEditable(node) {
    return node.contentEditable === 'true';
}
function isInput(node) {
    return node.tagName === 'INPUT';
}
function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
}
function isRadio(node) {
    return isInput(node) && node.type === 'radio';
}
function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
}
function getCheckedRadio(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked) {
            return nodes[i];
        }
    }
}
function isTabbableRadio(node) {
    if (!node.name)
        return true;
    // This won't account for the edge case where you have radio groups with the same
    // in separate forms on the same page.
    var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
    var checked = getCheckedRadio(radioSet);
    return !checked || checked === node;
}
function isHidden(node) {
    // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
    // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
    return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}
var tabbable_1 = tabbable;
var immutable = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
    var target = {};
    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var activeFocusDelay;
var activeFocusTraps = (function () {
    var trapQueue = [];
    return {
        activateTrap: function (trap) {
            if (trapQueue.length > 0) {
                var activeTrap = trapQueue[trapQueue.length - 1];
                if (activeTrap !== trap) {
                    activeTrap.pause();
                }
            }
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex === -1) {
                trapQueue.push(trap);
            }
            else {
                // move this existing trap to the front of the queue
                trapQueue.splice(trapIndex, 1);
                trapQueue.push(trap);
            }
        },
        deactivateTrap: function (trap) {
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex !== -1) {
                trapQueue.splice(trapIndex, 1);
            }
            if (trapQueue.length > 0) {
                trapQueue[trapQueue.length - 1].unpause();
            }
        }
    };
})();
function focusTrap(element, userOptions) {
    var doc = document;
    var container = typeof element === 'string' ? doc.querySelector(element) : element;
    var config = immutable({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true
    }, userOptions);
    var state = {
        firstTabbableNode: null,
        lastTabbableNode: null,
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false
    };
    var trap = {
        activate: activate,
        deactivate: deactivate,
        pause: pause,
        unpause: unpause
    };
    return trap;
    function activate(activateOptions) {
        if (state.active)
            return;
        updateTabbableNodes();
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        var onActivate = activateOptions && activateOptions.onActivate
            ? activateOptions.onActivate
            : config.onActivate;
        if (onActivate) {
            onActivate();
        }
        addListeners();
        return trap;
    }
    function deactivate(deactivateOptions) {
        if (!state.active)
            return;
        clearTimeout(activeFocusDelay);
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined
            ? deactivateOptions.onDeactivate
            : config.onDeactivate;
        if (onDeactivate) {
            onDeactivate();
        }
        var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined
            ? deactivateOptions.returnFocus
            : config.returnFocusOnDeactivate;
        if (returnFocus) {
            delay(function () {
                tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            });
        }
        return trap;
    }
    function pause() {
        if (state.paused || !state.active)
            return;
        state.paused = true;
        removeListeners();
    }
    function unpause() {
        if (!state.paused || !state.active)
            return;
        state.paused = false;
        updateTabbableNodes();
        addListeners();
    }
    function addListeners() {
        if (!state.active)
            return;
        // There can be only one listening focus trap at a time
        activeFocusTraps.activateTrap(trap);
        // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.
        activeFocusDelay = delay(function () {
            tryFocus(getInitialFocusNode());
        });
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('touchstart', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('click', checkClick, {
            capture: true,
            passive: false
        });
        doc.addEventListener('keydown', checkKey, {
            capture: true,
            passive: false
        });
        return trap;
    }
    function removeListeners() {
        if (!state.active)
            return;
        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkKey, true);
        return trap;
    }
    function getNodeForOption(optionName) {
        var optionValue = config[optionName];
        var node = optionValue;
        if (!optionValue) {
            return null;
        }
        if (typeof optionValue === 'string') {
            node = doc.querySelector(optionValue);
            if (!node) {
                throw new Error('`' + optionName + '` refers to no known node');
            }
        }
        if (typeof optionValue === 'function') {
            node = optionValue();
            if (!node) {
                throw new Error('`' + optionName + '` did not return a node');
            }
        }
        return node;
    }
    function getInitialFocusNode() {
        var node;
        if (getNodeForOption('initialFocus') !== null) {
            node = getNodeForOption('initialFocus');
        }
        else if (container.contains(doc.activeElement)) {
            node = doc.activeElement;
        }
        else {
            node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
        }
        if (!node) {
            throw new Error('Your focus-trap needs to have at least one focusable element');
        }
        return node;
    }
    function getReturnFocusNode(previousActiveElement) {
        var node = getNodeForOption('setReturnFocus');
        return node ? node : previousActiveElement;
    }
    // This needs to be done on mousedown and touchstart instead of click
    // so that it precedes the focus event.
    function checkPointerDown(e) {
        if (container.contains(e.target))
            return;
        if (config.clickOutsideDeactivates) {
            deactivate({
                returnFocus: !tabbable_1.isFocusable(e.target)
            });
            return;
        }
        // This is needed for mobile devices.
        // (If we'll only let `click` events through,
        // then on mobile they will be blocked anyways if `touchstart` is blocked.)
        if (config.allowOutsideClick && config.allowOutsideClick(e)) {
            return;
        }
        e.preventDefault();
    }
    // In case focus escapes the trap for some strange reason, pull it back in.
    function checkFocusIn(e) {
        // In Firefox when you Tab out of an iframe the Document is briefly focused.
        if (container.contains(e.target) || e.target instanceof Document) {
            return;
        }
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
    function checkKey(e) {
        if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
            e.preventDefault();
            deactivate();
            return;
        }
        if (isTabEvent(e)) {
            checkTab(e);
            return;
        }
    }
    // Hijack Tab events on the first and last focusable nodes of the trap,
    // in order to prevent focus from escaping. If it escapes for even a
    // moment it can end up scrolling the page and causing confusion so we
    // kind of need to capture the action at the keydown phase.
    function checkTab(e) {
        updateTabbableNodes();
        if (e.shiftKey && e.target === state.firstTabbableNode) {
            e.preventDefault();
            tryFocus(state.lastTabbableNode);
            return;
        }
        if (!e.shiftKey && e.target === state.lastTabbableNode) {
            e.preventDefault();
            tryFocus(state.firstTabbableNode);
            return;
        }
    }
    function checkClick(e) {
        if (config.clickOutsideDeactivates)
            return;
        if (container.contains(e.target))
            return;
        if (config.allowOutsideClick && config.allowOutsideClick(e)) {
            return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();
    }
    function updateTabbableNodes() {
        var tabbableNodes = tabbable_1(container);
        state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
        state.lastTabbableNode =
            tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
    }
    function tryFocus(node) {
        if (node === doc.activeElement)
            return;
        if (!node || !node.focus) {
            tryFocus(getInitialFocusNode());
            return;
        }
        node.focus();
        state.mostRecentlyFocusedNode = node;
        if (isSelectableInput(node)) {
            node.select();
        }
    }
}
function isSelectableInput(node) {
    return (node.tagName &&
        node.tagName.toLowerCase() === 'input' &&
        typeof node.select === 'function');
}
function isEscapeEvent(e) {
    return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}
function isTabEvent(e) {
    return e.key === 'Tab' || e.keyCode === 9;
}
function delay(fn) {
    return setTimeout(fn, 0);
}
var focusTrap_1 = focusTrap;
export { focusTrap_1 as f };
