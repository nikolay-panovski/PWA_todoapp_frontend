import { describe, it, expect, beforeAll } from "vitest";

import { mount } from "@vue/test-utils";
import LoginView from "../LoginView.vue";

describe("Login page elements - minimum required exist", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(LoginView);
    });


    it("should have input field for emails", () => {
        expect(wrapper.get("input#inputEmail")).toBeTruthy();  // intention: expect to exist
    });

    it("input field for emails is of type email", () => {
        expect(wrapper.get("input[type='email']")).toBeTruthy();
    });

    it("should have input field for password", () => {
        expect(wrapper.get("input#inputPassword")).toBeTruthy();  // intention: expect to exist
    });

    it("input field for password is of type password", () => {
        expect(wrapper.get("input[type='password']")).toBeTruthy();
    });

    it("should have submit button (of type button)", () => {
        expect(wrapper.get("button[type='button']")).toBeTruthy();
    });
});