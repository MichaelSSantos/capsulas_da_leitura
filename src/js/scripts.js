var CL = CL || {};

CL.CapsulaDaLeitura = (function(){
	
	function CapsulaDaLeitura(){
		this.shareVideoBtn = $('.js-share-video-btn');
		this.shareVideoInput = $('.js-share-video-input');
		this.modal = $('#culpaDasEstrelasModal');
		this.video = $('.video');
	}


	CapsulaDaLeitura.prototype.iniciar = function(){
		this.shareVideoBtn.on('click', shareVideoClicado.bind(this));
			this.modal.on('hide.bs.modal', onModalHide.bind(this));
	}

	function shareVideoClicado(evento){
		evento.preventDefault();
		this.shareVideoInput.show().select();
	}

	function onModalHide(){
		this.shareVideoInput.hide();
		this.video[0].load();
	}

	return CapsulaDaLeitura;
}());

$(function(){
	var capsulaDaLeitura = new CL.CapsulaDaLeitura();
	capsulaDaLeitura.iniciar();
});