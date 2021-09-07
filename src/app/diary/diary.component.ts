import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  DiaryList: string[] = [];
  disabled: boolean = false;

  emoji: any;

  textArea: string = '';
  isEmojiPickerVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
    try {
      this.DiaryList = JSON.parse(localStorage.getItem("diary") ?? "");
    } catch (error) {
      // console.log(error?.message);
    }

    window.addEventListener('click',()=>{
      if(this.isEmojiPickerVisible) !this.isEmojiPickerVisible;
    })
  }

  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = true;
    const styles = this.emoji.emojiSpriteStyles(event.emoji.sheet, 'twitter'); // pass emoji sheet
    const el = document.createElement('div');
    Object.assign(el.style, styles); // apply styles to new element
    document.body.appendChild(el);
  }

  saveItem() {
    if (this.textArea !== "") {
      this.DiaryList.push(this.textArea);
      localStorage.setItem("diary", JSON.stringify(this.DiaryList))
      this.textArea = "";
    } else {
      alert("Cannot save an empty diary");
    }
  }

}
