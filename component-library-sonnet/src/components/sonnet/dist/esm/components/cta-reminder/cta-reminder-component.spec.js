jest.mock('../../core/events/builder/EventConfigurationBuilder');
import { newSpecPage } from '@stencil/core/testing';
import { CtaReminderComponent } from './cta-reminder-component';
import { EventConfigurationBuilder } from '../../core/events/builder/EventConfigurationBuilder';
describe('CtaReminderComponent', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        const mockEventConfigBuilderClass = jest.fn().mockImplementation(() => ({
            withComponent: jest.fn(),
            build: jest.fn()
        }));
        const mockEventConfigBuilder = new mockEventConfigBuilderClass();
        mockEventConfigBuilder.withComponent.mockReturnValue(mockEventConfigBuilder);
        EventConfigurationBuilder.newInstanceof.mockReturnValue(mockEventConfigBuilder);
    });
    it('has a title', async () => {
        const specPageOptions = {
            components: [CtaReminderComponent],
            html: `<snt-cta-reminder title-string="My Title" action-reference="Action.logAction">
        </snt-cta-reminder>`
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector('h2');
        expect(titleElement.innerText).toEqual('My Title');
    });
    it('has a sonnet action button', async () => {
        const specPageOptions = {
            components: [CtaReminderComponent],
            html: `<snt-cta-reminder title-string="My Title" action-reference="Action.logAction" link-title="My button">
        </snt-cta-reminder>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector('snt-action-button');
        expect(buttonElement.getAttribute('link-title')).toEqual('My button');
    });
    it('has a external link', async () => {
        const specPageOptions = {
            components: [CtaReminderComponent],
            html: `<snt-cta-reminder title-string="My Title" link-title="My button" url="https://www.sonnet.ca" url-target="_blank">
        </snt-cta-reminder>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector('button-link');
        expect(buttonElement.getAttribute('class')).toEqual('theme-primary');
    });
    it('throws an exception without an action reference', async () => {
        const specPageOptions = {
            components: [CtaReminderComponent],
            html: `<snt-cta-reminder title-string="My Title">
        </snt-cta-reminder>`
        };
        try {
            await newSpecPage(specPageOptions);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('ActionButtonComponent must contain a valid action-reference attribute!');
        }
    });
});
