<script>
    import ProgressBar from '@/components/ProgressBar.svelte'
    import {url , node, isActive } from '@roxi/routify'
    import Nav from '../components/Nav.svelte'
</script>

<Nav/>

{#each $node.pages as childNode}
<li class:isActive={$isActive(childNode.path)}>
  <a href={$url(childNode.path)}>  {childNode.name} </a>
</li>
{/each}

<ProgressBar />
<Nav/>
<slot />

