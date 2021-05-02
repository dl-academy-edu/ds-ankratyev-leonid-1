

// DELIVERY LI


var HIDDEN_CLASS_NAME = 'hidden-list'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'
var FONTS_CLASS_NAME = 'fonts'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main()


// MODAL WINDOW

var popupBtn = document.querySelector('.banner-js');
var popupForm = document.querySelector('.popup-form');
var popupOverlay = document.querySelector('.popup-overlay');
var popupClose = document.querySelector('.popup-close');
var input = popupForm.querySelector('input');

popupBtn.addEventListener('click',function(){
	popupForm.classList.add('popup-open');
	popupOverlay.classList.add('popup-overlay-open');
	input.focus();
})

popupClose.addEventListener('click',function(){
	popupForm.classList.remove('popup-open');
	popupOverlay.classList.remove('popup-overlay-open');
})

window.addEventListener('keydown', function(cls){
	if(cls.keyCode === 27) {
		if(popupForm.classList.contains('popup-open')){
			popupForm.classList.remove('popup-open');
			popupOverlay.classList.remove('popup-overlay-open');
		}
	}
})


	var buttonArea = document.getElementsByClassName('rating-area');
	var textCompany = document.getElementsByClassName('rating-block');
	buttonArea[0].onclick = function() {
		textCompany[0].classList.add("color-style");
	}
	buttonArea[1].onclick = function() {
		textCompany[0].classList.remove("color-style");
	}

