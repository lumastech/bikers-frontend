<template>
    <Dashboard>
        <div class="grid lg:grid-cols-6 gap-4  max-w-7xl mx-auto">
            <div class="lg:col-span-2">
                <!-- bus tracking number -->
                <div class="mb-7 p-2">
                    <label for="search" class="text-teal-400">Find Package by tracking NO#</label>
                    <div class="flex border border-teal-400 w-full rounded">
                        <input type="search" name="search" class="w-full px-2 placeholder-gray-300" placeholder="Tracking Number" />
                        <button class="bg-teal-400 px-2 text-white"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                    <h2 class="text-teal-600">PROGRESS</h2>
                    <div class="flex gap-2 mt-4 relative">
                        <div class="p-px h-full bg-gray-300 rounded-full absolute left-1">
                            <div class="w-1 h-2/3 rounded-full bg-teal-400"></div>
                        </div>
                        
                        <div class="w-7 space-y-8">
                            <div class="h-4 w-4 rounded-full bg-teal-400 ring mt-2 relative"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-400 ring relative"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-400 ring relative"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-400 ring relative"></div>
                        </div>
                        
                        <div class="flex-auto space-y-4">
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">PROCESSED</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">IN TRANSITE</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">READY FOR COLLECTION</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">COLLECTED</div>
                        </div>
                    </div>
                </div>

                <!-- info -->
                <div class="my-7 p-4 bg-orange-50 rounded-md border-l-4 border-orange-400 text-orange-400">
                    Fields with '*' are mandatory
                </div>
            </div>
            <div class="lg:col-span-4">
                <form @submit.prevent="submitPackage" class="space-y-4">
                    <!-- SENDER'S DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600 text-xl font-bold">PACKAGE DETAILS</h2>
                        <label for="name" class="block text-gray-500">Processed By*</label>
                        <input v-model="packag.processed_by" type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Select Bike*</label>
                        <select v-model="packag.bike_id" class="block rounded border border-teal-400 w-full px-2 py-1">
                            <option value="">Select Bike</option>
                        </select>

                        <div class="grid grid-cols-2 gap-4">
                            <div>                                
                                <label for="name" class="block text-gray-500 mt-4">departure date*</label>
                                <input v-model="packag.departure_date" type="date" name="name" class="block rounded border border-teal-400 w-full">
                            </div>
                            
                            <div>                                
                                <label for="name" class="block text-gray-500 mt-4">time*</label>
                                <input v-model="packag.departure_time" type="time" name="name" class="block rounded border border-teal-400 w-full">
                            </div>
                        </div>
                    </div>
                
                    <!-- RECEVER'S DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600">RECEVER'S DETAILS</h2>

                        <label for="name" class="block text-gray-500 mt-4">Name*</label>
                        <input v-model="packag.receiver_name" type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Phone*</label>
                        <input v-model="packag.receiver_phone" type="tel" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Address*</label>
                        <input v-model="packag.receiver_address" type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <!-- <label for="name" class="block text-gray-500 mt-4">change</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full"> -->
                    </div>
                
                    <!-- PACKAGE DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600">PACKAGE DETAILS</h2>

                        <label for="name" class="block text-gray-500 mt-4">Price (ZMW)*</label>
                        <input v-model="packag.price" type="text" name="name" class="block rounded border border-teal-400 w-full px-2">

                        <label for="name" class="block text-gray-500 mt-4">Value (ZMW)</label>
                        <input v-model="packag.value" type="text" name="name" class="block rounded border border-teal-400 w-full px-2">

                        <label for="name" class="block text-gray-500 mt-4">Measurements (CM)</label>
                        <div class="grid grid-cols-3 gap-2">
                            <input v-model="packag.measurements.hieght" type="number" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="HEIGHT">
                            <input v-model="packag.measurements.width" type="number" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="WIDTH">
                            <input v-model="packag.measurements.length" type="number" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="LENGTH">
                        </div>

                        <label for="name" class="block text-gray-500 mt-4">Volume</label>
                        <input v-model="packag.volume" type="text" name="name" class="block rounded border border-teal-400 w-full" disabled>
                        
                        <label for="" class="block text-gray-500 mt-4">Descriptions</label>
                        <textarea v-model="packag.description" class="block rounded border border-teal-400 w-full h-24"></textarea>
                    </div>
                    <!-- <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                    
                    </div> -->
                    <button class="bg-gradient-to-r from-sky-300 to-teal-300 hover:opacity-50 rounded py-2 px-4 w-full md:w-1/2 text-white transition shadow-md">PROCEED</button>
                </form>
            </div>
        </div>
    </Dashboard>
</template>

<script >
import { reactive, ref } from 'vue';
import Dashboard from '../layouts/dashboard.vue';

export default {
    components: {
        Dashboard
    },
    setup() {
        const bikes = ref([])
        const packag = reactive({
            processed_by: '',
            bike_id: '',
            departure_date: '',
            departure_time: '',

            receiver_name: '',
            receiver_phone: '',
            receiver_address: '',

            price: '',
            value: '',
            volume: '',
            measurements: {
                hieght: '',
                width: '',
                length: '',
            },
            description: '',
        })

        const submitPackage = () => {
            console.log(packag)
        }
        return {
            packag, bikes, submitPackage
        }
    }
    }
</script>