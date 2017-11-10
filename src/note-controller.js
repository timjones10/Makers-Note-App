"use strict";

(function(exports) {
  function NoteController() {
// probs better to instantiate other classes somewhere outside of this class and inject them
    this._noteList = new NoteList();
    this._noteListView = new NoteListView(this._noteList);
    this._noteList.createNote('Favourite drink: seltzer');
  };

  var element = document.getElementById('app')
NoteController.prototype.listMaker = function(element) {
element.innerHTML = this._noteListView.printList();
};

NoteController.prototype.makeURLchangetoSingleNoteView = function() {
  window.addEventListener("hashchange", this.identifySingleNote());
};

NoteController.prototype.identifySingleNote = function() {
var noteID = window.location.hash.split("#")[1];
  console.log(noteID);
var note = this._noteList.getNotebyId(noteID);
  console.log(note);
};

exports.NoteController = NoteController;
}) (this);



window.onload = function () {
};
