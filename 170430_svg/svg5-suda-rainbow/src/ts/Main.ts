import "es6-promise/auto";
import "whatwg-fetch";

class Main {

  private SUDA_NUM:number = 100;

  constructor() {
    this.fetchAndAppendSVG();
  }

  private async fetchAndAppendSVG():Promise<void> {
    const svgString:string = await this.fetchSVG();
    const container:HTMLDivElement = <HTMLDivElement> document.getElementById("container");
    for (let i = 0; i < this.SUDA_NUM; i++) {
      const div:HTMLDivElement = document.createElement("div");
      div.className = "suda";
      div.innerHTML = svgString;
      container.appendChild(div);
    }
  }

  private async fetchSVG():Promise<string> {
    return fetch("./images/suda.svg").then((response) => {
      return response.text();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => new Main());
