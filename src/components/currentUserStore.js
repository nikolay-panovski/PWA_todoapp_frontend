import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCurrentUserStore = defineStore("useCurrentUser", () => {
    const id = ref();
    const name_first = ref();
    const name_last = ref();
    const company = ref();
    const role = ref();

    const token = ref();

    // computed()s become getters - maybe useful if I want to limit re-assignment to refs?
    // definitely useful if I need to define filter queries or more complex accesses
    const hasCurrentUser = computed(() => id.value !== undefined && id.value !== null);

    const userToken = computed(() => token);

    // only LoginView ever calls this after successful log in
    function addCurrentUser(pId, pNameFirst, pNameLast, pCompany, pRole, pToken) {
        id.value = pId;
        name_first.value = pNameFirst;
        name_last.value = pNameLast;
        company.value = pCompany;
        role.value = pRole;

        token.value = pToken;
    }

    function removeCurrentUser() {
        id.value = null;
        name_first.value = null;
        name_last.value = null;
        company.value = null;
        role.value = null;

        token.value = null; // removes token on frontend side. JWT token does not invalidate in general.
                            // this problem is worth mentioning, but definitely out of scope in this app.
    }

    return {
        id,
        name_first,
        name_last,
        company,
        role,

        // token    // never re-assign token directly, instead in the absence of refresh tokens etc. force users to log in anew
        userToken,

        hasCurrentUser,
        addCurrentUser,
        removeCurrentUser
    } ;
});