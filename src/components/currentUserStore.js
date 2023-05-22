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

    // TODO: function addCurrentUser() that updates the values with a new user and that only LoginView ever calls after successful log in

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
        removeCurrentUser
    } ;
});