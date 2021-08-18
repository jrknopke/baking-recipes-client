class Recipe{
    
    constructor(title, directions, ingredients){
        this.id = this.id
        this.title = title
        this.directions = directions
        this.ingredients = [...ingredients]
    }

    static fetchRecipes(){
        fetch("http://localhost:3000/recipes")
        .then(resp => resp.json())
        .then(json => Recipe.renderRecipes(json))
    }

    static renderRecipes(recipesInfo){
        recipesInfo.forEach(recipe => {
            
        })
    }

}