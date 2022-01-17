<script>
    import TodoItem from "$lib/todo-item.svelte";

    const title = "Liste des tâches à effectuer";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>

    <form class="new" action="" method="">
        <input
            type="text"
            name="todo"
            aria-label="Ajouter une tâches à effectuer"
            placeholder="+ entrez une tâches à ajouter"
        />
    </form>

    <TodoItem />
</div>

<style>
    .todos {
        width: 100%;
        max-width: 600px;
        margin: 4rem auto 0;
    }
    .new {
        margin: 0 0 0.5rem;
    }
    .new input {
        font-size: 28px;
        border-radius: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1em;
        text-align: center;
        background: none;
    }
    .todos :global(input) {
        border: 1px solid transparent;
    }
    .todos :global(input:focus-visible) {
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        outline: none;
    }
</style>
