<script>
    import TodoItem from "$lib/todo-item.svelte";

    const title = "Liste des tâches à effectuer";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<form action="" method="">
    <input type="text" name="todo" aria-label="Ajouter une tâches à effectuer" placeholder="+ entrez une tâches à ajouter">
</form>

<TodoItem/>