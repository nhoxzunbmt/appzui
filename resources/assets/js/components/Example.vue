<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">

                        <ol>
                            <!--
                              Now we provide each todo-item with the todo object
                              it's representing, so that its content can be dynamic.
                              We also need to provide each component with a "key",
                              which will be explained later.
                            -->
                            <todo-item
                                    v-for="item in groceryList"
                                    v-bind:todo="item"
                                    v-bind:key="item.id">
                            </todo-item>

                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                groceryList: [
                    {id: 0, text: 'Vegetables'},
                    {id: 1, text: 'Cheese'},
                    {id: 2, text: 'Whatever else humans are supposed to eat 123121 1212'}
                ]
            }
        }
    }
</script>
