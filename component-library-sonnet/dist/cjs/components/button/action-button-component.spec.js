import { newSpecPage } from "@stencil/core/testing";
import { ActionButtonComponent } from "./action-button-component";
import { ButtonComponent } from "./button-component";
import { EventComponent } from "../event/event-component";
import { EventTypeEnum } from "../../core/events/domain/EventTypeEnum";
import { EventConfigurationElement } from "../../core/events/domain/EventConfigurationElement";
describe("Unit tests for Action Button Component", () => {
    describe("Markup", () => {
        it("renders button markup correctly", async () => {
            const specPageOptions = {
                components: [ButtonComponent, EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            const page = await newSpecPage(specPageOptions);
            const button = page.body.querySelector("snt-button");
            expect(button.outerHTML).toEqual("<snt-button id=\"sonnet-button\" style-classes=\"\" hidden-title=\"\"><!----> <button> Sonnet Button</button></snt-button>");
        });
    });
    describe('Props', () => {
        it('has action reference property set based on action-reference attribute', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            const page = await newSpecPage(specPageOptions);
            const sntActionButton = page.body.querySelector(ActionButtonComponent.TAG_NAME);
            expect(sntActionButton.actionReference).toEqual("logAction");
        });
        it('throws an error when action reference property is not set', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button>
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            expect.assertions(2);
            try {
                const page = await newSpecPage(specPageOptions);
                await page.waitForChanges();
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual("ActionButtonComponent must contain a valid action-reference attribute!");
            }
        });
    });
    describe('Event Configuration', () => {
        it('builds configuration object when event meta tags are provided', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            expect.assertions(1);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionButtonComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            expect(configuration.hasConfigurations()).toEqual(true);
        });
        it('builds an event configuration element based on a meta tag for click', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            expect.assertions(2);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionButtonComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.CLICK);
            expect(configurationElement).toBeInstanceOf(EventConfigurationElement);
            expect(configurationElement.type).toEqual("click");
        });
        it('builds an event configuration element based on a meta tag for keydown', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionButtonComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.KEYDOWN);
            expect(configurationElement).toBeInstanceOf(EventConfigurationElement);
            expect(configurationElement.type).toEqual("keydown");
        });
        it('throws an error when an invalid event configuration meta tag is provided', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="focusin"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
          </snt-action-button>`
            };
            expect.assertions(2);
            try {
                const page = await newSpecPage(specPageOptions);
                await page.waitForChanges();
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual("Event configuration type not supported.");
            }
        });
        it('keydown configuration has keycodes and it contains 2 elements', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
            </snt-action-button>`
            };
            expect.assertions(2);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionButtonComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.KEYDOWN);
            const keys = configurationElement.getKeys();
            expect(keys).toBeInstanceOf(Set);
            expect(keys.size).toEqual(2);
        });
        it('throws an error when keydown configuration has a filter attribute with an empty value', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filter=""></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
            </snt-action-button>`
            };
            expect.assertions(2);
            try {
                const page = await newSpecPage(specPageOptions);
                await page.waitForChanges();
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual("Event type keydown must have a valid filter");
            }
        });
        it('throws an error when keydown configuration has no filter attributes', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionButtonComponent],
                html: `<snt-action-button action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown"></snt-event>
            <snt-button id="sonnet-button">Sonnet Button</snt-button>
            </snt-action-button>`
            };
            expect.assertions(2);
            try {
                const page = await newSpecPage(specPageOptions);
                await page.waitForChanges();
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual("Event type keydown must have a valid filter");
            }
        });
    });
});
