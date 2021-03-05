import { newSpecPage } from '@stencil/core/testing';
import { EventTypeEnum } from "../../core/events/domain/EventTypeEnum";
import { EventConfigurationElement } from "../../core/events/domain/EventConfigurationElement";
import { LinkComponent } from "./link-component";
import { EventComponent } from "../event/event-component";
import { ActionLinkComponent } from "./action-link-component";
describe('Unit tests for Action Button Component', () => {
    describe('Markup', () => {
        it('renders child elements correctly', async () => {
            // Arrange
            const specPageOptions = {
                components: [LinkComponent, EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="Action.logAction" link-title="Sonnet Action Link" icon-class-name="mobile-phone">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape backspace tab"></snt-event>
          </snt-action-link>`
            };
            // Act
            const page = await newSpecPage(specPageOptions);
            const sntActionLink = page.body.querySelector("snt-action-link");
            // Assert
            expect(sntActionLink.querySelector('snt-link').innerText).toContain('Sonnet Action Link');
            expect(sntActionLink.querySelectorAll('snt-icon').length).toEqual(1);
            expect(sntActionLink.querySelectorAll('snt-link').length).toEqual(1);
            expect(sntActionLink.querySelectorAll('snt-event').length).toEqual(2);
            expect(sntActionLink.querySelector('a').getAttribute('href')).toEqual('javascript:void(0);');
        });
    });
    describe('Props', () => {
        // POSITIVE
        it('has action reference property set based on action-reference attribute', async () => {
            // Arrange
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
          </snt-action-link>`
            };
            // Act
            const page = await newSpecPage(specPageOptions);
            const sntActionLink = page.body.querySelector(ActionLinkComponent.TAG_NAME);
            // Assert
            expect(sntActionLink.actionReference).toEqual("logAction");
        });
        it('throws an error when action reference property is not set', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link>
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
          </snt-action-link>`
            };
            expect.assertions(2);
            try {
                const page = await newSpecPage(specPageOptions);
                await page.waitForChanges();
            }
            catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toEqual("SntActionLink must contain a valid action-reference attribute!");
            }
        });
    });
    describe('Event Configuration', () => {
        it('builds configuration object when event meta tags are provided', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
          </snt-action-link>`
            };
            expect.assertions(1);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionLinkComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const hasConfigurations = configuration.hasConfigurations();
            expect(hasConfigurations).toEqual(true);
        });
        it('builds an event configuration element based on a meta tag for click', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
          </snt-action-link>`
            };
            expect.assertions(2);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionLinkComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.CLICK);
            expect(configurationElement).toBeInstanceOf(EventConfigurationElement);
            expect(configurationElement.type).toEqual("click");
        });
        it('builds an event configuration element based on a meta tag for keydown', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
          </snt-action-link>`
            };
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionLinkComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.KEYDOWN);
            expect(configurationElement).toBeInstanceOf(EventConfigurationElement);
            expect(configurationElement.type).toEqual("keydown");
        });
        it('throws an error when an invalid event configuration meta tag is provided', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="focusin"></snt-event>
            <snt-link>Sonnet Link</snt-link>
          </snt-action-link>`
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
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown" filters="space escape"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
            </snt-action-link>`
            };
            expect.assertions(2);
            const page = await newSpecPage(specPageOptions);
            const actionButton = page.body.querySelector(ActionLinkComponent.TAG_NAME);
            const configuration = await actionButton.getEventConfiguration();
            const configurationElement = configuration.findByType(EventTypeEnum.KEYDOWN);
            const keyCodes = configurationElement.getKeys();
            expect(keyCodes).toBeInstanceOf(Set);
            expect(keyCodes.size).toEqual(2);
        });
        it('throws an error when keydown configuration has no filter attributes', async () => {
            const specPageOptions = {
                components: [EventComponent, ActionLinkComponent],
                html: `<snt-action-link action-reference="logAction">
            <snt-event type="click"></snt-event>
            <snt-event type="keydown"></snt-event>
            <snt-link id="sonnet-link">Sonnet Button</snt-link>
            </snt-action-link>`
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
