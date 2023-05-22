import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCurrentUserStore = defineStore("useCurrentUser", () => {
    const id = ref();
    const name_first = ref();
    const name_last = ref();
    const company = ref();
    const role = ref();

    // computed()s become getters - maybe useful if I want to limit re-assignment to refs?
    // definitely useful if I need to define filter queries or more complex accesses
    const hasCurrentUser = computed(() => id.value !== undefined && id.value !== null);

    // only LoginView ever calls this after successful log in
    function addCurrentUser(pId, pNameFirst, pNameLast, pCompany, pRole) {
        id.value = pId;
        name_first.value = pNameFirst;
        name_last.value = pNameLast;
        company.value = pCompany;
        role.value = pRole;
    }

    function removeCurrentUser() {
        id.value = null;
        name_first.value = null;
        name_last.value = null;
        company.value = null;
        role.value = null;
    }

    return {
        id,
        name_first,
        name_last,
        company,
        role,
        hasCurrentUser,
        addCurrentUser,
        removeCurrentUser
    } ;
});