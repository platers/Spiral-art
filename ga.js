//const mutation_rate = 0.5
var genetic = Genetic.create();
genetic.optimize = Genetic.Optimize.Minimize;
genetic.select1 = Genetic.Select1.RandomLinearRank;
//genetic.select2 = Genetic.Select2.Tournament2; //enable crossover

genetic.seed = function(){
    function randomArray(n){
        var a = [];
        for(var i = 0; i < n; i++){
            a.push(Math.random(10));
        }
        //console.log(a.length);
        return a;
    }
    return randomArray(this.userData["N"]);
}

genetic.mutate = function(chromosome){
    var a = [];
    for(var i = 0; i < chromosome.length; i++){
        var p = Math.random();
        var t = chromosome[i];
        if(p < 1){
            p = Math.random();
            if(p < 0.5) t += 1;
            else t -= 1;            
        }
        if(t < 1) t = 1;
        if(t > 10) t = 10;
        a.push(t);
    }
    return a;
}

genetic.fitness = function(chromosome){
    var fitness = 0;
    for(var i = 0; i < chromosome.length; i++){
        fitness += Math.abs(chromosome[i] - 8);
    }
    return fitness;
}
var userData = {
    "N": 30000
};
var config = {
    "iterations": 100
    , "size": 20
    , "mutation": 0.5
};
genetic.notification = function(pop, generation, stats, isFinished) {
    console.log(stats);
    drawSpiral(pop[0].entity);
};

genetic.evolve(config, userData);
	