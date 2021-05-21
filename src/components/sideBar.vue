<template>
    <div class="side-bar">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
        >
            <div>
                <el-menu-item index="1" v-if="showAddFilesBtn">
                    <svg
                        t="1619095498324"
                        class="icon svg-padding"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7437"
                        width="21"
                        height="21"
                    >
                        <path
                            d="M186.181818 837.818182l325.818182 0 0 46.545455-325.818182 0 0-46.545455ZM837.818182 837.818182 837.818182 884.363636 930.909091 884.363636 930.909091 0 232.727273 0 232.727273 93.090909 279.272727 93.090909 279.272727 46.545455 884.363636 46.545455 884.363636 837.818182ZM186.181818 698.181818l512 0 0 46.545455-512 0 0-46.545455ZM93.090909 149.410909l0 864.814545C93.090909 1019.624727 97.373091 1024 102.679273 1024l678.958545 0C786.990545 1024 791.272727 1019.671273 791.272727 1014.225455L791.272727 149.410909C791.272727 144.011636 786.990545 139.636364 781.684364 139.636364L102.679273 139.636364C97.373091 139.636364 93.090909 143.965091 93.090909 149.410909zM139.636364 186.181818l605.090909 0 0 791.272727L139.636364 977.454545 139.636364 186.181818zM186.181818 279.272727l512 0 0 46.545455-512 0 0-46.545455ZM186.181818 418.909091l512 0 0 46.545455-512 0 0-46.545455ZM186.181818 558.545455l512 0 0 46.545455-512 0 0-46.545455Z"
                            p-id="7438"
                        ></path>
                    </svg>
                    <span slot="title">添加文件</span>
                </el-menu-item>
            </div>
            <el-menu-item index="2">
                <svg
                    t="1619095469377"
                    class="icon svg-padding"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7291"
                    width="21"
                    height="21"
                >
                    <path
                        d="M628.093 164c146.05 0 264.887 118.837 264.887 264.892 0 75.23-31.684 143.073-82.212 191.348L953.21 806.79c11.095 14.506 8.311 35.296-6.291 46.42-5.961 4.604-13.044 6.791-20.033 6.791-9.998 0-19.83-4.506-26.353-13.045L757.592 659.74c-38.343 21.59-82.451 34.044-129.499 34.044-146.053 0-264.89-118.838-264.89-264.892C363.202 282.837 482.04 164 628.092 164z m-165.52 562.397c17.655 0 31.967 14.312 31.967 31.966 0 17.654-14.312 31.966-31.966 31.966H96.966C79.312 790.329 65 776.017 65 758.363c0-17.654 14.312-31.966 31.966-31.966h365.608z m165.551-496.205c-109.566 0-198.67 89.099-198.67 198.664 0 109.566 89.104 198.67 198.67 198.67 109.566 0 198.67-89.104 198.67-198.67 0-109.565-89.104-198.664-198.67-198.664zM232.82 478.662c17.654 0 31.966 14.312 31.966 31.966 0 17.655-14.312 31.966-31.966 31.966H96.966C79.312 542.594 65 528.283 65 510.628c0-17.654 14.312-31.965 31.966-31.965H232.82z m59.936-248.733c17.654 0 31.966 14.312 31.966 31.966 0 17.654-14.312 31.966-31.966 31.966H96.966C79.312 293.86 65 279.549 65 261.895c0-17.654 14.312-31.966 31.966-31.966h195.79z"
                        p-id="7292"
                    ></path>
                </svg>
                <span slot="title">搜索文件</span>
            </el-menu-item>
            <el-menu-item index="3" @click="$emit('backToLogin')">
                <i class="el-icon-setting"></i>
                <span slot="title">登出</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<style>
.side-bar {
    position: fixed;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 180px;
}
svg {
    margin-right: 8px;
}
.svg-padding {
    margin-left: 3px;
}
</style>

<script>
export default {
    data() {
        return {
            showAddFilesBtn:  null,
            abc: false,
            isCollapse: true,

        };
    },
    beforeCreate() {
        console.log(this.$store.state);


    },
    mounted() {
        this.showAddFilesBtn = this.$store.state.isAdmin
       // this.showAddFilesBtn = this.$store.state.isAdmin == true ?  true:false
        console.log( this.showAddFilesBtn);
    },
    methods: {

        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    watch: {
        showAddFilesBtn: {
            handler(val){
                console.log(val)
            },
            immediate: true
        }
    }
};
</script>