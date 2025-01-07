<script >

const host =  import.meta.env.VITE_REMOTE || 'localhost';

console.log(host);

export default {
    data() {
        return {
            userlist: "",
            }
        },
    methods: {
    
        readUserlist: async function() {
            const url = `http://${host}:8008/users`;
            try {
                const response = await fetch(url , {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, OPTIONS, PUT, POST",
                        "Access-Control-Allow-Headers": "X-Requested-With",
                        "Content-Type": "text/plain"
                    }
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                this.userlist = await response.json() ; 
            } catch (error) {
                console.error(error.message);
                this.userlist = [ 'pick', 'some', 'user', 'like', 'dave' ];
                
            }

        },// end of method??
        //////////////////
    },
    mounted() {
        if (this.userlist.length == 0){
            this.readUserlist();
        }
    },
    
};


</script>

<template>
        <!-- +++++++++++++++++++++ -->
        {{ userlist }}


   
</template>

<style scoped>

</style>
