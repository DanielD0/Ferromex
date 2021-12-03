<template>
    <teleport to="body">
        <div ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50" v-if="showModal">
            <div class="flex items-start justify-center min-h-screen pt-24 text-center">
                <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2" role="dialog" ref="modal" aria-modal="true" v-show="showModal" aria-labelledby="modal-headline">
                    <div>
                        <button class="ml-auto" @click.stop="closeModal">
                        X
                    </button>
                    </div>
                    <slot>
                    </slot>
                </div>
                
            </div>
            
        </div>
        
    </teleport>
</template>

<script>
import { ref, watch, reactive } from 'vue';

    const props = {
        show: {
            type: Boolean,
            default: true,
        },
        };
    export default {
        name: 'ModalDialog',
        props,
        setup(props) {
        const showModal = ref(false);
            function closeModal() {
                showModal.value = false;
                console.log(showModal.value);
            }     
            
            watch(
                () => props.show,
                show => {
                showModal.value = true;
                console.log(showModal.value);
                },
            );
            
            return {
                closeModal,
                showModal,
            };
        },
    };
</script>

<style>

</style>