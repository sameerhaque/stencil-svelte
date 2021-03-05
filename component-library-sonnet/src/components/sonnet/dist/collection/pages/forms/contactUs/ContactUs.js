import axios from "axios";
import { DeviceUtils } from "../../../core/utils/DeviceUtils";
import { LanguageUtils } from "../../../core/utils/LanguageUtils";
export class ContactUs {
    constructor() { }
    static getInstance() {
        if (!ContactUs.instance) {
            ContactUs.instance = new ContactUs();
        }
        return ContactUs.instance;
    }
    async listen() {
        await customElements.whenDefined("snt-form");
        document.addEventListener("formSubmit", async (event) => {
            const formData = await event.target.getData();
            const contactData = {
                gRecaptchaResponse: formData.content.recaptcha,
                firstName: formData.content.firstName,
                lastName: formData.content.lastName,
                emailAddress: formData.content.email,
                languageCode: LanguageUtils.isEnglish() ? "en_CA" : "fr_CA",
                interestedIn: formData.content.interested,
                leadSource: "Case (Contact Us)",
                hasOptedOutOfEmail: 'true',
                caseType: formData.content.subject,
                caseDescription: formData.content.message,
                deviceType: DeviceUtils.getDeviceType(),
                operatingSystem: DeviceUtils.getOperatingSystem(),
            };
            axios
                .post("/api/vtl/contact", contactData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(this.onSuccess.bind(this), this.onFailure.bind(this));
        });
    }
    onSuccess(response) {
        if (response.data.sfResponse &&
            response.data.sfResponse.response &&
            response.data.sfResponse.response.toLowerCase().includes("success")) {
            window.location.href = LanguageUtils.isFrench() ? ContactUs.FR_URL : ContactUs.EN_URL;
        }
        else {
            this.showErrorModal(`SF request failed: ${response.data.sfResponse}`);
        }
    }
    onFailure(error) {
        this.showErrorModal(`SF request failed: ${error.message}`);
    }
    async showErrorModal(reason) {
        //open error modal
        const FORM_TAG = "snt-form";
        const ERROR_MODAL_ID = "error-modal";
        await customElements.whenDefined(FORM_TAG);
        var formComponent = document.querySelector(FORM_TAG);
        await customElements.whenDefined("snt-modal");
        const closeText = formComponent.getAttribute("data-close") || "Close";
        const actionData = JSON.parse(`{\"errorModalUrl\":\"modals/contact-us-login-error-modal\",\"languageString\":{\"close\":\"${closeText}\"}}`);
        console.log(reason); //TO-DO Add error to error log
        await formComponent.openErrorModal(actionData, ERROR_MODAL_ID);
    }
}
ContactUs.EN_URL = "/contact-us/email-success";
ContactUs.FR_URL = "/pour-nous-joindre/courriel-succes";
const contactUs = ContactUs.getInstance();
contactUs.listen();
