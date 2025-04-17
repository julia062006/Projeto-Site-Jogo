

const scriptsInEvents = {

	async FolhaFase2_Event7_Act2(runtime, localVars)
	{
		//Obter o valor da variavel global vidas
		let vida = runtime.globalVars.Vidas;
		
		//Reduz uma vida
		vida --;
		
		//atualiza a variavel global 
		runtime.globalVars.Vidas = vida;
		
		//se vida chegar a zero, executa a ação (ir para tela game over)
		if(vida <= 0)
			runtime.goToLayout(("tela game over"))
		endif
		
	},

	async FolhaFase1_Event7_Act2(runtime, localVars)
	{
		let vida = runtime.globalVars.Vidas;
		
		vida --;
		
		runtime.globalVars.Vidas = vida;
		
		if(vida <= 0)
		   runtime.goToLayout("tela game over")
		endif
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
