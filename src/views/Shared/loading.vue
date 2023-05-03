<template>
    <div v-show="loading" class="fixed bg-black/50 w-full h-full top-0 left-0">
        <div class="flex h-full">
            <div class="rounded-md w-56 bg-white p-4 self-center mx-auto flex space-x-3">
                <i class="fas fa-gear text-teal-500 self-center text-4xl animate-spin"></i>
                <h1 class="self-center">Processing...</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean
    }
}
</script>