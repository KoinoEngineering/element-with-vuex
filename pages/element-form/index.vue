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
                <el-input :value="form.user" placeholder="Approved by" @input="updateUser($event)" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="Activity zone">
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
        console.log("data", this.user);
        return {
            form: {
                user: this.user,
                region: this.region,
            },
        };
    },
    methods: {
        ...mapActions({
            updateUser: "elementForm/updateUser",
        }),
        onSubmit () {
            console.log("submit!");
        },
    },
    computed: {
        ...mapGetters({
            user: "elementForm/user",
            region: "elementForm/region",
        }),
    },
    watch: {
        user () {
            this.form.user = this.user;
        },
    },
    validate () {
        console.log("validate", this.user);
        return true;
    },
    middleware: "authenticated",
    fetch () {
        console.log("fetch", this.user);
    },
    async asyncData () {
        console.log("asyncData");
    },
    beforeCreate () {
        console.log("beforeCreate", this.user);
    },
    created () {
        console.log("created", this.user);
        this.form.user = this.user;
    },
    beforeMount () {
        console.log("beforeMount", this.user);
    },
    mounted () {
        console.log("mounted", this.user);
    },
    beforeUpdate () {
        console.log("beforeUpdate", this.user);
    },
    updated () {
        console.log("updated", this.user);
    },
    beforeDestroy () {
        console.log("beforeDestroy", this.user);
    },
    destroyed () {
        console.log("destroyed", this.user);
    },
};

export default options;
</script>
