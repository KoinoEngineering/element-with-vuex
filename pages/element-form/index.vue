<template>
    <div>
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item
                :rules="[
                    {
                        required: true
                    }
                ]"
                prop="user"
                label="Approved by"
            >
                <el-input :value="form.user" placeholder="Approved by" @input="updateState({ user: $event })" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select :value="form.region" placeholder="Activity zone" @change="updateState({ region: $event })">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">
                    Query
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const options = {
    data () {
        // eslint-disable-next-line no-console
        console.log("data", this.form);
        return {
            form: {
                user: "",
                region: "",
            },
        };
    },
    methods: {
        ...mapActions({
            updateState: "elementForm/updateState",
        }),
        onSubmit () {
            // eslint-disable-next-line no-console
            console.log("submit!");
        },
    },
    computed: {
        ...mapGetters({
            state: "elementForm/state",
        }),
    },
    watch: {
        state () {
            // eslint-disable-next-line no-console
            console.log("hooking watch state");
            Object.assign(this.form, this.state);
        },
    },
    validate () {
        // eslint-disable-next-line no-console
        console.log("validate", this.form);
        return true;
    },
    middleware: "authenticated",
    fetch () {
        // eslint-disable-next-line no-console
        console.log("fetch", this.form);
    },
    async asyncData () {
        // eslint-disable-next-line no-console
        console.log("asyncData");
    },
    beforeCreate () {
        // eslint-disable-next-line no-console
        console.log("beforeCreate", this.form);
    },
    created () {
        // eslint-disable-next-line no-console
        console.log("created", this.form);
        Object.assign(this.form, this.state);
    },
    beforeMount () {
        // eslint-disable-next-line no-console
        console.log("beforeMount", this.form);
    },
    mounted () {
        // eslint-disable-next-line no-console
        console.log("mounted", this.form);
    },
    beforeUpdate () {
        // eslint-disable-next-line no-console
        console.log("beforeUpdate", this.form);
    },
    updated () {
        // eslint-disable-next-line no-console
        console.log("updated", this.form);
    },
    beforeDestroy () {
        // eslint-disable-next-line no-console
        console.log("beforeDestroy", this.form);
    },
    destroyed () {
        // eslint-disable-next-line no-console
        console.log("destroyed", this.form);
    },
};

export default options;
</script>
