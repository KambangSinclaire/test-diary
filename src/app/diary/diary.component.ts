import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  DiaryList: any[] = [];
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
      let currentDate = Date().split(' ');
      let item = {
        text:this.textArea,
        time:currentDate[4],
        day:currentDate[2],
        month:currentDate[1],
        year:currentDate[3]
      }
      this.DiaryList.push(item);
      localStorage.setItem("diary", JSON.stringify(this.DiaryList))
      this.textArea = "";
      this.isEmojiPickerVisible = false;
    } else {
      alert("Cannot save an empty diary");
    }
  }

}
