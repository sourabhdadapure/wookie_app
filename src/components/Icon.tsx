import * as React from "react";
import { SvgXml } from "react-native-svg";

interface IconProperties {
  icon: IconTypes;
  color: string;
  strokeColor: string;
  size: number;
}

export type IconTypes = "home" | "search";

export default class Icon extends React.Component<IconProperties> {
  getXmlComponent(
    name: IconTypes,
    color: string,
    strokeColor: string,
    size: number
  ): string {
    switch (name) {
      case "home":
        return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10.1104C1 9.12031 1.48855 8.19394 2.30564 7.63473L10.3056 2.1596C11.3271 1.46055 12.6729 1.46055 13.6944 2.1596L21.6944 7.63473C22.5115 8.19394 23 9.12031 23 10.1104V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V10.1104Z" stroke=${strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            `;
      case "search":
        return `<?xml version="1.0" encoding="UTF-8"?>
                                        <svg width=${size} height=${size} viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <!-- Generator: Sketch 56.3 (81716) - https://sketch.com -->
                                            <title>search icon copy</title>
                                            <desc>Created with Sketch.</desc>
                                            <g id="Sign-In/Up" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Home---New-Signed-Up" transform="translate(-288.000000, -57.000000)" stroke=${strokeColor} stroke-width="2">
                                                    <g id="search-icon-copy" transform="translate(289.000000, 58.000000)">
                                                        <circle id="Oval" cx="10" cy="10" r="10"></circle>
                                                        <path d="M18.125,18.125 L23.9945654,23.9945654" id="Line-2" stroke-linecap="round"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>`;
      default:
        return `<svg
          width="24"
          height="24"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 501 191C 626 191 690 275 690 375C 690 475 639 483 595 513C 573 525 558 553 559 575C 559 591 554 602 541 601C 541 601 460 601 460 601C 446 601 436 581 436 570C 436 503 441 488 476 454C 512 421 566 408 567 373C 566 344 549 308 495 306C 463 303 445 314 411 361C 400 373 384 382 372 373C 372 373 318 333 318 333C 309 323 303 307 312 293C 362 218 401 191 501 191C 501 191 501 191 501 191M 500 625C 541 625 575 659 575 700C 576 742 540 776 500 775C 457 775 426 739 425 700C 425 659 459 625 500 625C 500 625 500 625 500 625" />
        </svg>`;
    }
  }

  render() {
    const { icon, color, strokeColor, size } = this.props;
    return (
      <SvgXml xml={this.getXmlComponent(icon, color, strokeColor, size)} />
    );
  }
}
