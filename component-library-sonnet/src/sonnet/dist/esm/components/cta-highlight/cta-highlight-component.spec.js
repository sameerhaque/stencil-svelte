jest.mock('../../core/events/builder/EventConfigurationBuilder');
import { newSpecPage } from '@stencil/core/testing';
import { CtaHighlightComponent } from './cta-highlight-component';
import { EventConfigurationBuilder } from '../../core/events/builder/EventConfigurationBuilder';
describe('CtaHighlightComponent', () => {
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
            components: [CtaHighlightComponent],
            html: `<snt-cta-highlight cta="Get a Quote" action-reference="Action.logAction">My Title</snt-cta-highlight>`
        };
        const page = await newSpecPage(specPageOptions);
        const titleElement = page.root.querySelector('div.text-content');
        expect(titleElement.innerText).toEqual('My Title');
    });
    it('has a sonnet action button', async () => {
        const specPageOptions = {
            components: [CtaHighlightComponent],
            html: `<snt-cta-highlight cta="My Button" action-reference="Action.logAction">My Title</snt-cta-highlight>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector('snt-action-button');
        expect(buttonElement.getAttribute('link-title')).toEqual('My Button');
    });
    it('has a external link', async () => {
        const specPageOptions = {
            components: [CtaHighlightComponent],
            html: `<snt-cta-highlight cta="My Button" url="https://en.sonnet.ca" url-target="_blank">My Title</snt-cta-highlight>`
        };
        const page = await newSpecPage(specPageOptions);
        const buttonElement = page.root.querySelector('button-link');
        expect(buttonElement.getAttribute('class')).toEqual('theme-primary');
    });
    it('throws an exception without an action reference', async () => {
        const specPageOptions = {
            components: [CtaHighlightComponent],
            html: `<snt-cta-highlight>My Title</snt-cta-highlight>`
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
