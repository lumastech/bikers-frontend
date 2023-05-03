<template>
    <Dashboard>
        <div class="grid lg:grid-cols-6 gap-4  max-w-7xl mx-auto">
            <div class="lg:col-span-2">
                <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                    <h2 class="text-teal-600">PROGRESS</h2>
                    <div class="flex gap-2 mt-4 relative">
                        <div class="p-px h-full bg-gray-300 rounded-full absolute left-1 ">
                            <div class="w-1 h-2/3 rounded-full bg-teal-400"></div>
                        </div>
                        
                        <div class="w-7 space-y-8">
                            <div class="h-4 w-4 rounded-full bg-teal-200 ring mt-2"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-200 ring"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-200 ring"></div>
                            <div class="h-4 w-4 rounded-full bg-teal-200 ring"></div>
                        </div>
                        
                        <div class="flex-auto space-y-4">
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">PROCESSED</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">IN TRANSITE</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">READY FOR COLLECTION</div>
                            <div class="bg-gradient-to-r from-sky-100 to-teal-100 rounded-md text-xs p-2">COLLECTED</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-4">
                <form action="" class="space-y-4">
                    <!-- SENDER'S DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600 text-xl font-bold">PACKAGE DETAILS</h2>
                        <h2 class="text-teal-600">PACKAGE DETAILS</h2>
                        <label for="name" class="block text-gray-500">Processed By</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Select Bike</label>
                        <select class="block rounded border border-teal-400 w-full px-2 py-1">
                            <option value="">Select Bike</option>
                        </select>

                        <div class="grid grid-cols-2 gap-4">
                            <div>                                
                                <label for="name" class="block text-gray-500 mt-4">departure date</label>
                                <input type="date" name="name" class="block rounded border border-teal-400 w-full">
                            </div>
                            
                            <div>                                
                                <label for="name" class="block text-gray-500 mt-4">time</label>
                                <input type="time" name="name" class="block rounded border border-teal-400 w-full">
                            </div>
                        </div>
                    </div>
                
                    <!-- RECEVER'S DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600">RECEVER'S DETAILS</h2>

                        <label for="name" class="block text-gray-500 mt-4">Name</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Phone</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <label for="name" class="block text-gray-500 mt-4">Address</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full">

                        <!-- <label for="name" class="block text-gray-500 mt-4">change</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full"> -->
                    </div>
                
                    <!-- PACKAGE DETAILS -->
                    <div class="bg-sky-50 p-2 rounded-md shadow-sm">
                        <h2 class="text-teal-600">PACKAGE DETAILS</h2>

                        <label for="name" class="block text-gray-500 mt-4">Price (ZMW)</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full px-2">

                        <label for="name" class="block text-gray-500 mt-4">Value (ZMW)</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full px-2">

                        <label for="name" class="block text-gray-500 mt-4">Weight</label>
                        <div class="grid grid-cols-3 gap-2">
                            <input type="text" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="LENGTH">
                            <input type="text" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="HEIGHT">
                            <input type="text" name="name" class="block rounded border border-teal-400 w-full px-2" placeholder="WIDTH">
                        </div>

                        <label for="name" class="block text-gray-500 mt-4">Volume</label>
                        <input type="text" name="name" class="block rounded border border-teal-400 w-full" disabled>
                        
                        <label for="" class="block text-gray-500 mt-4">Descriptions</label>
                        <textarea class="block rounded border border-teal-400 w-full h-24"></textarea>
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
import Dashboard from '../layouts/dashboard.vue';

export default {
    components: {
        Dashboard
    }
    }
</script>