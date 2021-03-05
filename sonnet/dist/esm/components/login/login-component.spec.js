import { newSpecPage } from "@stencil/core/testing";
import { LoginComponent } from "./login-component";
import { ComponentConstants } from "../ComponentConstants";
describe("LoginComponent", () => {
    const loginURL = "https://secure.sonnet.ca/#/login?lang=en";
    const dashBoardURL = "https://secure.sonnet.ca/#/account/dashboard?lang=en";
    describe("when user is not logged in", () => {
        it("its authed prop is set to '0'", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login account-login-url="${loginURL}" 
                account-dashboard-url="${dashBoardURL}">
                </snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=0`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.authed).toEqual("0");
        });
        it("links to the account login page", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login account-login-url="${loginURL}" 
                account-dashboard-url="${dashBoardURL}">
                </snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=0`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.innerHTML).toContain(loginURL);
        });
        it("displays the word 'login'", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login account-login-url="${loginURL}" 
                account-dashboard-url="${dashBoardURL}">
                </snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=0`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.textContent.trim()).toContain("Log In");
        });
    });
    describe("when user is logged in", () => {
        it("its authed prop is set to '1'", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login account-login-url="${loginURL}" 
                account-dashboard-url="${dashBoardURL}">
                </snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=1`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.authed).toEqual("1");
        });
        it("links to the account dashboard page", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login account-login-url="${loginURL}" 
                account-dashboard-url="${dashBoardURL}">
                </snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=1`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.innerHTML).toContain(dashBoardURL);
        });
        it("does not display the word 'login'", async () => {
            const specPageOptions = {
                components: [LoginComponent],
                html: `<snt-login></snt-login>`,
                cookie: `${ComponentConstants.AUTH_COOKIE_NAME}=1`
            };
            const page = await newSpecPage(specPageOptions);
            const loginEl = page.body.querySelector(LoginComponent.TAG_NAME);
            expect(loginEl.textContent.trim()).not.toContain("Log In");
        });
    });
});
