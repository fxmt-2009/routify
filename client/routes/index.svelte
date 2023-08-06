<script>
    import ExamplesSplash from '@/routes/examples/[mode]/__components/ExamplesSplash.svelte'
    import {meta} from "@roxi/routify"

    //console.log("meta log in index.svelte :", $meta)

    const mydata = $meta.cryptos.data
    



</script>

<!-- Remove this element to remove the Routify Welcome content. 
     It is also safe to remove the src/routes/examples folder. -->
<ExamplesSplash />




<div style="border:solid green; margin : 2rem;">
    <p>Todo fetch results : {$meta.todoresults.title} </p>
 </div>
 
 <!-- <div>
      <ExamplesSplash />
 </div> -->
 
 
 <div style="text-align : center;">
    <h1>Cryptos</h1>
        {#each mydata as crypto}
        <li style="list-style : none; margin : 1rem;">
            {crypto.symbol} - {crypto.nameid} : ${crypto.price_usd}
        </li>
        {/each}
 </div>