/*! name: @uvarov.frontend/vanilla-calendar | url: https://github.com/uvarov-frontend/vanilla-calendar */
if(typeof window!=='undefined'){!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var s=t();for(var a in s)("object"==typeof exports?exports:e)[a]=s[a]}}(self,(()=>(()=>{"use strict";var e={d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>ee});const s=e=>{if(!["default","multiple","year"].includes(e.currentType))return;const t=e.HTMLElement.querySelector(`.${e.CSSClasses.arrowPrev}`),s=e.HTMLElement.querySelector(`.${e.CSSClasses.arrowNext}`);if(!t||!s)return;"default"!==e.currentType&&"multiple"!==e.currentType||(()=>{if(!e.dateMin||!e.dateMax)return;const a=e.selectedMonth===e.dateMin.getUTCMonth(),l=e.selectedMonth===e.dateMax.getUTCMonth(),n=!e.settings.selection.year||e.selectedYear===e.dateMin.getUTCFullYear(),i=!e.settings.selection.year||e.selectedYear===e.dateMax.getUTCFullYear();a&&n||!e.settings.selection.month?t.style.visibility="hidden":t.style.visibility="",l&&i||!e.settings.selection.month?s.style.visibility="hidden":s.style.visibility=""})(),"year"===e.currentType&&e.dateMin&&e.dateMax&&void 0!==e.viewYear&&(e.dateMin.getUTCFullYear()&&e.viewYear-7<=e.dateMin.getUTCFullYear()?t.style.visibility="hidden":t.style.visibility="",e.dateMax.getUTCFullYear()&&e.viewYear+7>=e.dateMax.getUTCFullYear()?s.style.visibility="hidden":s.style.visibility="")},a=(e,t)=>{e.popups&&Object.keys(e.popups).forEach((s=>{var a;const l=t.querySelector(`[data-calendar-day="${s}"]`);if(l){const t=null==(a=e.popups)?void 0:a[s];(null==t?void 0:t.modifier)&&t.modifier.trim().split(" ").forEach((e=>{l.classList.add(e)})),(null==t?void 0:t.html)&&(l.parentNode.innerHTML+=`<div class="${e.CSSClasses.dayPopup}">${t.html}</div>`)}}))},l=(e,t)=>{if(!e)return null;const s=new Date(e).getUTCDate(),a=new Date(e).getUTCMonth(),l=new Date(e).getUTCFullYear(),n=new Date(Date.UTC(l,a,s)),i=t?n.getUTCDay()||7:n.getUTCDay();n.setUTCDate(n.getUTCDate()+4-i);const d=new Date(Date.UTC(n.getUTCFullYear(),0,1));return{year:l,week:Math.ceil(((+n-+d)/864e5+1)/7)}},n=(e,t,s,a,n)=>{if(!e.settings.visibility.weekNumbers)return;const i=n.querySelectorAll(`.${e.CSSClasses.day}`);a.innerHTML="";const d=Math.ceil((t+s)/7),r=document.createElement("b");r.className=e.CSSClasses.weekNumbersTitle,r.innerText="#",a.append(r);const c=document.createElement("div");c.className=e.CSSClasses.weekNumbersContent,a.append(c);const o=document.createElement("span");o.className=e.CSSClasses.weekNumber;for(let t=0;t<d;t++){let s=null;s=0===t?i[6].querySelector(`.${e.CSSClasses.dayBtn}`):i[7*t].querySelector(`.${e.CSSClasses.dayBtn}`);const a=l(s.dataset.calendarDay,e.settings.iso8601);if(!a)return;const n=o.cloneNode(!0);n.innerText=`${a.week}`,n.dataset.calendarYearWeek=`${a.year}`,c.append(n)}},i=e=>{const t=e.getUTCFullYear();let s=e.getUTCMonth()+1,a=e.getUTCDate();return s=s<10?`0${s}`:s,a=a<10?`0${a}`:a,`${t}-${s}-${a}`},d=e=>{var t;const s=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.days}`),d=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.weekNumbers}`),r=new Date(e.date.today.getTime()),c=document.createElement("div"),o=document.createElement("button");c.className=e.CSSClasses.day,o.className=e.CSSClasses.dayBtn,o.type="button",null==(t=e.selectedDates)||t.sort(((e,t)=>+new Date(e)-+new Date(t))),s.forEach(((t,u)=>{const v=new Date(r.setMonth(e.selectedMonth+u)).getMonth(),g=new Date(r.setFullYear(e.selectedYear,e.selectedMonth+u)).getFullYear(),m=new Date(Date.UTC(g,v,1)),y=new Date(Date.UTC(g,v+1,0)).getUTCDate();let C=Number(m.getUTCDay());e.settings.iso8601&&(C=Number((0!==m.getUTCDay()?m.getUTCDay():7)-1)),e.settings.selection.day&&["single","multiple","multiple-ranged"].includes(e.settings.selection.day)&&s[u].classList.add(e.CSSClasses.daysSelecting),s[u].innerHTML="";const S=(t,a,n,i,d)=>{const r=c.cloneNode(!0),v=o.cloneNode(!0);if(d&&v.classList.add(d),v.innerText=t,v.dataset.calendarDay=n,e.settings.visibility.weekNumbers){const t=l(n,e.settings.iso8601);if(!t)return;v.dataset.calendarWeekNumber=`${t.week}`}((t,s,a,l,n)=>{var i,d;e.settings.range.disableWeekday.includes(a)&&(null==(i=e.rangeDisabled)||i.push(l),null==(d=e.rangeDisabled)||d.sort(((e,t)=>+new Date(e)-+new Date(t)))),!e.settings.visibility.weekend||0!==a&&6!==a||s.classList.add(e.CSSClasses.dayBtnWeekend),Array.isArray(e.selectedHolidays)&&e.selectedHolidays.forEach((t=>{t===l&&s.classList.add(e.CSSClasses.dayBtnHoliday)}));let r=e.date.today.getDate(),c=e.date.today.getMonth()+1;r=r<10?`0${r}`:r,c=c<10?`0${c}`:c;const o=`${e.date.today.getFullYear()}-${c}-${r}`;e.settings.visibility.today&&s.dataset.calendarDay===o&&s.classList.add(e.CSSClasses.dayBtnToday),e.selectedDates&&0===e.selectedDates.indexOf(l)?("multiple-ranged"===e.settings.selection.day&&e.selectedDates.length>1?t.classList.add(e.CSSClasses.daySelectedFirst):t.classList.add(e.CSSClasses.daySelected),s.classList.add(e.CSSClasses.dayBtnSelected)):e.selectedDates&&e.selectedDates[0]&&e.selectedDates.indexOf(l)===e.selectedDates.length-1?(t.classList.add(e.CSSClasses.daySelected),"multiple-ranged"===e.settings.selection.day?t.classList.add(e.CSSClasses.daySelectedLast):t.classList.add(e.CSSClasses.daySelected),s.classList.add(e.CSSClasses.dayBtnSelected)):e.selectedDates&&e.selectedDates.indexOf(l)>0&&"multiple-ranged"===e.settings.selection.day?(t.classList.add(e.CSSClasses.daySelectedIntermediate),s.classList.add(e.CSSClasses.dayBtnSelected),s.classList.add(e.CSSClasses.dayBtnIntermediate)):e.selectedDates&&e.selectedDates.indexOf(l)>0&&(t.classList.add(e.CSSClasses.daySelected),s.classList.add(e.CSSClasses.dayBtnSelected)),(e.rangeMin>l||e.rangeMax<l)&&(s.classList.add(e.CSSClasses.dayBtnDisabled),s.tabIndex=-1),!e.settings.selection.month&&n&&(s.classList.add(e.CSSClasses.dayBtnDisabled),s.tabIndex=-1),e.settings.selection.year||new Date(l).getFullYear()===g||(s.classList.add(e.CSSClasses.dayBtnDisabled),s.tabIndex=-1),Array.isArray(e.rangeDisabled)?e.rangeDisabled.forEach((t=>{t===l&&(s.classList.add(e.CSSClasses.dayBtnDisabled),s.tabIndex=-1)})):Array.isArray(e.rangeEnabled)&&(s.classList.add(e.CSSClasses.dayBtnDisabled),s.tabIndex=-1,e.rangeEnabled.forEach((t=>{t===l&&(s.classList.remove(e.CSSClasses.dayBtnDisabled),s.tabIndex=0)})))})(r,v,a,n,i),i?e.settings.visibility.daysOutside&&r.append(v):r.append(v),s[u].append(r)};(()=>{let t=new Date(Date.UTC(g,v,0)).getUTCDate()-C,s=g,a=v;0===v?(a=e.locale.months.length,s=g-1):v<10&&(a=`0${v}`);for(let l=0;l<C;l++){t+=1;const l=`${s}-${a}-${t}`,n=new Date(Date.UTC(g,v,t-1)).getUTCMonth()-1,i=new Date(Date.UTC(g,n,t)).getUTCDay();S(String(t),i,l,!0,e.CSSClasses.dayBtnPrev)}})(),(()=>{for(let e=1;e<=y;e++){const t=new Date(Date.UTC(g,v,e)),s=i(t),a=t.getUTCDay();S(String(e),a,s,!1,null)}})(),(()=>{const t=C+y,s=Math.ceil(t/e.locale.weekday.length),a=e.locale.weekday.length*s-t;let l=g,n=String(v+2);v+1===e.locale.months.length?(n="01",l=g+1):v+2<10&&(n=`0${v+2}`);for(let t=1;t<=a;t++){const s=`${l}-${n}-${t<10?`0${t}`:String(t)}`,a=new Date(Date.UTC(g,v,t)).getUTCMonth()+1,i=new Date(Date.UTC(g,a,t)).getUTCDay();S(String(t),i,s,!0,e.CSSClasses.dayBtnNext)}})(),a(e,s[u]),n(e,C,y,d[u],s[u])}))},r=e=>`\n\t<button type="button"\n\t\tclass="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"\n\t\tdata-calendar-arrow="prev"\n\t\ttitle="Prev">\n\t</button>\n`,c=e=>`\n\t<button type="button"\n\tclass="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"\n\tdata-calendar-arrow="next"\n\ttitle="Next">\n\t</button>\n`,o=e=>`\n\t<button type="button"\n\t\tclass="${e.CSSClasses.month}"\n\t\tdata-calendar-selected-month>\n\t</button>\n`,u=e=>`\n\t<button type="button"\n\t\tclass="${e.CSSClasses.year}"\n\t\tdata-calendar-selected-year>\n\t</button>\n`,v=e=>`\n\t<div class="${e.CSSClasses.week}"></div>\n`,g=e=>`\n\t<div class="${e.CSSClasses.days}"></div>\n`,m=e=>`\n\t<div class="${e.CSSClasses.months}"></div>\n`,y=e=>`\n\t<div class="${e.CSSClasses.years}"></div>\n`,C=e=>e.settings.visibility.weekNumbers?`\n\t<div class="${e.CSSClasses.weekNumbers}"></div>\n`:"",S=e=>e.settings.selection.time?`\n\t<div class="${e.CSSClasses.time}"></div>\n`:"",h=e=>{let t=null;switch(e){case"ArrowPrev":t=r;break;case"ArrowNext":t=c;break;case"Month":t=o;break;case"Year":t=u;break;case"Week":t=v;break;case"Days":t=g;break;case"Months":t=m;break;case"Years":t=y;break;case"WeekNumbers":t=C;break;case"ControlTime":t=S}return t},b=(e,t)=>t.replace(/<#(.*?)\/>/g,((t,s)=>{const a=h(s.replace(/[\s\n\t]/g,""));return a?a(e):""})).replace(/[\n\t]/g,""),p=e=>{const t=e.HTMLElement;switch(t.classList.add(e.CSSClasses.calendar),e.currentType){case"default":t.classList.add(e.CSSClasses.calendarDefault),t.classList.remove(e.CSSClasses.calendarMonth),t.classList.remove(e.CSSClasses.calendarYear),t.innerHTML=b(e,e.DOMTemplates.default);break;case"multiple":if(!e.correctMonths)break;t.classList.add(e.CSSClasses.calendarMultiple),t.classList.remove(e.CSSClasses.calendarMonth),t.classList.remove(e.CSSClasses.calendarYear),t.innerHTML=((e,t)=>t.replace(/<#Multiple>(.*?)<#\/Multiple>/g,((t,s)=>{let a="";for(let t=0;t<e.correctMonths;t++)a+=s;return a})).replace(/[\n\t]/g,""))(e,b(e,e.DOMTemplates.multiple));break;case"month":t.classList.remove(e.CSSClasses.calendarDefault),t.classList.add(e.CSSClasses.calendarMonth),t.classList.remove(e.CSSClasses.calendarYear),t.innerHTML=b(e,e.DOMTemplates.month);break;case"year":t.classList.remove(e.CSSClasses.calendarDefault),t.classList.remove(e.CSSClasses.calendarMonth),t.classList.add(e.CSSClasses.calendarYear),t.innerHTML=b(e,e.DOMTemplates.year)}},D=e=>{const t=e.HTMLElement.querySelectorAll("[data-calendar-selected-month]");if(!t[0]||void 0===e.selectedMonth)return;const s=new Date(e.date.today.getTime());t.forEach(((a,l)=>{const n=new Date(s.setMonth(e.selectedMonth+l)).getMonth();t[l].dataset.calendarSelectedMonth=String(n),t[l].innerText=e.locale.months[n],e.settings.selection.month&&"multiple"!==e.currentType?(t[l].tabIndex=0,t[l].classList.remove(e.CSSClasses.monthDisabled)):(t[l].tabIndex=-1,t[l].classList.add(e.CSSClasses.monthDisabled))}))},M=e=>{const t=e.HTMLElement.querySelectorAll("[data-calendar-selected-year]");if(!t||void 0===e.selectedMonth)return;const s=new Date(e.date.today.getTime());t.forEach(((a,l)=>{const n=new Date(s.setFullYear(e.selectedYear,e.selectedMonth+l)).getFullYear();t[l].dataset.calendarSelectedYear=String(n),t[l].innerText=String(n),e.settings.selection.year&&"multiple"!==e.currentType?(t[l].tabIndex=0,t[l].classList.remove(e.CSSClasses.yearDisabled)):(t[l].tabIndex=-1,t[l].classList.add(e.CSSClasses.yearDisabled))}))},T=e=>{e.currentType="month",p(e),D(e),M(e);const t=e.HTMLElement.querySelector(`.${e.CSSClasses.months}`);if(void 0===e.selectedMonth||void 0===e.selectedYear||!e.dateMin||!e.dateMax||!t)return;e.settings.selection.month&&t.classList.add(e.CSSClasses.monthsSelecting);const s=document.createElement("button");s.type="button",s.className=e.CSSClasses.monthsMonth;for(let a=0;a<e.locale.months.length;a++){const l=e.locale.months[a],n=s.cloneNode(!0);a===e.selectedMonth&&n.classList.add(e.CSSClasses.monthsMonthSelected),a<e.dateMin.getUTCMonth()&&e.selectedYear===e.dateMin.getUTCFullYear()&&(n.classList.add(e.CSSClasses.monthsMonthDisabled),n.tabIndex=-1),a>e.dateMax.getUTCMonth()&&e.selectedYear===e.dateMax.getUTCFullYear()&&(n.classList.add(e.CSSClasses.monthsMonthDisabled),n.tabIndex=-1),n.dataset.calendarMonth=String(a),n.title=`${l}`,n.innerText=`${e.settings.visibility.monthShort?l.substring(0,3):l}`,t.append(n)}},w=e=>{const t=Number(e);let s=String(t);return 0===t?s="12":13===t?s="01":14===t?s="02":15===t?s="03":16===t?s="04":17===t?s="05":18===t?s="06":19===t?s="07":20===t?s="08":21===t?s="09":22===t?s="10":23===t&&(s="11"),s},f=(e,t)=>{const s=Number(e);let a=String(s);return"AM"===t?12===s&&(a="00"):"PM"===t&&(1===s?a="13":2===s?a="14":3===s?a="15":4===s?a="16":5===s?a="17":6===s?a="18":7===s?a="19":8===s?a="20":9===s?a="21":10===s?a="22":11===s&&(a="23")),a},$=(e,t)=>{const s=e.HTMLElement.querySelector(`.${e.CSSClasses.timeRange} input[name="hours"]`),a=e.HTMLElement.querySelector(`.${e.CSSClasses.timeRange} input[name="minutes"]`),l=e.HTMLElement.querySelector(`.${e.CSSClasses.timeHours} input[name="hours"]`),n=e.HTMLElement.querySelector(`.${e.CSSClasses.timeMinutes} input[name="minutes"]`),i=e.HTMLElement.querySelector(`.${e.CSSClasses.timeKeeping}`),d=(t,s)=>{t.addEventListener("mouseover",(()=>s.classList.add(e.CSSClasses.isFocus)))},r=(t,s)=>{t.addEventListener("mouseout",(()=>s.classList.remove(e.CSSClasses.isFocus)))},c=(t,s,a)=>{"hours"===a?e.selectedHours=`${s}`:"minutes"===a&&(e.selectedMinutes=`${s}`),e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`,e.settings.selected.time=e.selectedTime,e.actions.changeTime&&e.actions.changeTime(t,e.selectedTime,e.selectedHours,e.selectedMinutes,e.selectedKeeping)},o=(t,s,a,l)=>{t.addEventListener("input",(t=>{let n=Number(t.target.value);n=n<10?`0${n}`:`${n}`,"hours"===a&&12===l?Number(t.target.value)<l&&Number(t.target.value)>0?(s.value=n,e.selectedKeeping="AM",i.innerText=e.selectedKeeping,c(t,n,a)):(0===Number(t.target.value)?(e.selectedKeeping="AM",i.innerText="AM"):(e.selectedKeeping="PM",i.innerText="PM"),s.value=w(t.target.value),c(t,w(t.target.value),a)):(s.value=n,c(t,n,a))}))},u=(t,s,a,l)=>{s.addEventListener("change",(s=>{const n=s.target;let d=Number(n.value);d=d<10?`0${d}`:`${d}`,"hours"===a&&12===l?n.value&&Number(n.value)<=l&&Number(n.value)>0?(n.value=d,t.value=f(d,e.selectedKeeping),c(s,d,a)):n.value&&Number(n.value)<24&&(Number(n.value)>l||0===Number(n.value))?(0===Number(n.value)?(e.selectedKeeping="AM",i.innerText="AM"):(e.selectedKeeping="PM",i.innerText="PM"),n.value=w(n.value),t.value=d,c(s,w(n.value),a)):n.value=e.selectedHours:n.value&&Number(n.value)<=l&&Number(n.value)>=0?(n.value=d,t.value=d,c(s,d,a)):"hours"===a?n.value=e.selectedHours:"minutes"===a&&(n.value=e.selectedMinutes)}))};d(s,l),d(a,n),r(s,l),r(a,n),o(s,l,"hours",24===t?23:12),o(a,n,"minutes",0),u(s,l,"hours",24===t?23:12),u(a,n,"minutes",59),i&&i.addEventListener("click",(t=>{i.innerText.includes("AM")?e.selectedKeeping="PM":e.selectedKeeping="AM",s.value=f(e.selectedHours,e.selectedKeeping),c(t,e.selectedHours,"hours"),i.innerText=e.selectedKeeping}))},k=e=>{const t=e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);if(!t)return;const s=!0===e.settings.selection.time?12:e.settings.selection.time,a="range"===e.settings.selection.controlTime;t.innerHTML=`\n\t<div class="${e.CSSClasses.timeContent}">\n\t\t<label class="${e.CSSClasses.timeHours}">\n\t\t\t<input type="text"\n\t\t\t\tname="hours"\n\t\t\t\tmaxlength="2"\n\t\t\t\tvalue="${e.selectedHours}"\n\t\t\t\t${a?"disabled":""}>\n\t\t</label>\n\t\t<label class="${e.CSSClasses.timeMinutes}">\n\t\t\t<input type="text"\n\t\t\t\tname="minutes"\n\t\t\t\tmaxlength="2"\n\t\t\t\tvalue="${e.selectedMinutes}"\n\t\t\t\t${a?"disabled":""}>\n\t\t</label>\n\t\t${12===s?`\n\t\t<button type="button"\n\t\t\tclass="${e.CSSClasses.timeKeeping}"\n\t\t\t${a?"disabled":""}>${e.selectedKeeping}</button>\n\t\t`:""}\n\t</div>\n\t<div class="${e.CSSClasses.timeRanges}">\n\t\t<label class="${e.CSSClasses.timeRange}">\n\t\t\t<input type="range"\n\t\t\t\tname="hours"\n\t\t\t\tmin="0"\n\t\t\t\tmax="23"\n\t\t\t\tstep="${e.settings.selection.stepHours}"\n\t\t\t\tvalue="${e.selectedKeeping?f(e.selectedHours,e.selectedKeeping):e.selectedHours}">\n\t\t</label>\n\t\t<label class="${e.CSSClasses.timeRange}">\n\t\t\t<input type="range"\n\t\t\t\tname="minutes"\n\t\t\t\tmin="0"\n\t\t\t\tmax="59"\n\t\t\t\tstep="${e.settings.selection.stepMinutes}"\n\t\t\t\tvalue="${e.selectedMinutes}">\n\t\t</label>\n\t</div>`,$(e,s)},L=e=>{const t=[...e.locale.weekday];if(!t[0])return;const s=e.HTMLElement.querySelectorAll(`.${e.CSSClasses.week}`),a=document.createElement("b");a.className=e.CSSClasses.weekDay,e.settings.iso8601&&t.push(t.shift()),s.forEach((s=>{s.innerHTML="";for(let l=0;l<t.length;l++){const n=t[l],i=a.cloneNode(!0);e.settings.visibility.weekend&&e.settings.iso8601?5!==l&&6!==l||i.classList.add(e.CSSClasses.weekDayWeekend):e.settings.visibility.weekend&&!e.settings.iso8601&&(0!==l&&6!==l||i.classList.add(e.CSSClasses.weekDayWeekend)),i.innerText=`${n}`,s.append(i)}}))},x=e=>{if(void 0===e.viewYear||!e.dateMin||!e.dateMax)return;e.currentType="year",p(e),D(e),M(e),s(e);const t=e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);if(!t)return;e.settings.selection.year&&t.classList.add(e.CSSClasses.yearsSelecting);const a=document.createElement("button");a.type="button",a.className=e.CSSClasses.yearsYear;for(let s=e.viewYear-7;s<e.viewYear+8;s++){const l=s,n=a.cloneNode(!0);l===e.selectedYear&&n.classList.add(e.CSSClasses.yearsYearSelected),l<e.dateMin.getUTCFullYear()&&(n.classList.add(e.CSSClasses.yearsYearDisabled),n.tabIndex=-1),l>e.dateMax.getUTCFullYear()&&(n.classList.add(e.CSSClasses.yearsYearDisabled),n.tabIndex=-1),n.dataset.calendarYear=String(l),n.innerText=`${l}`,t.append(n)}},_=e=>{if("define"!==e.settings.lang){e.locale.weekday=[];for(let t=0;t<7;t++){let s=new Date(0,0,t).toLocaleString(e.settings.lang,{weekday:"short"});s=`${s.charAt(0).toUpperCase()}${s.substring(1,s.length)}`,s=s.replace(/\./,""),e.locale.weekday.push(s)}e.locale.months=[];for(let t=0;t<12;t++){let s=new Date(0,t).toLocaleString(e.settings.lang,{month:"long"});s=`${s.charAt(0).toUpperCase()}${s.substring(1,s.length)}`,s=s.replace(/\./,""),e.locale.months.push(s)}}},Y=e=>{const t=[];return e.forEach((e=>{e.match(/^(\d{4}-\d{2}-\d{2})$/g)?t.push(e):e.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,((e,s,a)=>{const l=new Date(s),n=new Date(a),d=new Date(l.getTime());for(;d<=n;d.setDate(d.getDate()+1))t.push(i(d));return e}))})),t},N=e=>{e.rangeMin=e.settings.range.min,e.rangeMax=e.settings.range.max,e.rangeDisabled=e.settings.range.disabled?Y([...e.settings.range.disabled]):[],e.rangeEnabled=e.settings.range.enabled?Y([...e.settings.range.enabled]):[],e.selectedDates=e.settings.selected.dates?Y([...e.settings.selected.dates]):[],e.selectedHolidays=e.settings.selected.holidays?Y([...e.settings.selected.holidays]):[],e.settings.range.disablePast&&new Date(e.settings.range.min)<e.date.today&&(e.rangeMin=i(e.date.today));const t=new Date(e.rangeMin),s=new Date(e.rangeMax);t.setDate(t.getDate()-1),s.setDate(s.getDate()+1),e.rangeDisabled.push(i(t)),e.rangeDisabled.push(i(s)),e.rangeDisabled.sort(((e,t)=>+new Date(e)-+new Date(t))),null!==e.settings.selected.month&&e.settings.selected.month>=0&&e.settings.selected.month<12?e.selectedMonth=e.settings.selected.month:e.selectedMonth=e.date.today.getMonth(),null!==e.settings.selected.year&&e.settings.selected.year>=0&&e.settings.selected.year<=9999?e.selectedYear=e.settings.selected.year:e.selectedYear=e.date.today.getFullYear(),e.viewYear=e.selectedYear,e.dateMin=e.settings.visibility.disabled?new Date(e.date.min):new Date(e.rangeMin),e.dateMax=e.settings.visibility.disabled?new Date(e.date.max):new Date(e.rangeMax);const a=!0===e.settings.selection.time||12===e.settings.selection.time;if(a||24===e.settings.selection.time){if("string"==typeof e.settings.selected.time){const t=a?/^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g:/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;e.settings.selected.time.replace(t,((t,s,l,n)=>(s&&l&&(e.userTime=!0,e.selectedHours=s,e.selectedMinutes=l),n&&a?e.selectedKeeping=n:a&&(e.selectedKeeping="AM"),"")))}!e.userTime&&a?(e.selectedHours=w(String(e.date.today.getHours())),e.selectedMinutes=String(e.date.today.getMinutes()),e.selectedKeeping=Number(e.date.today.getHours())>12?"PM":"AM"):e.userTime||(e.selectedHours=String(e.date.today.getHours()),e.selectedMinutes=String(e.date.today.getMinutes())),e.selectedHours=Number(e.selectedHours)<10?`0${Number(e.selectedHours)}`:`${e.selectedHours}`,e.selectedMinutes=Number(e.selectedMinutes)<10?`0${Number(e.selectedMinutes)}`:`${e.selectedMinutes}`,e.selectedTime=`${e.selectedHours}:${e.selectedMinutes}${e.selectedKeeping?` ${e.selectedKeeping}`:""}`}else e.settings.selection.time&&(e.settings.selection.time=!1,console.error("The value of the time property can be: false, true, 12 or 24."));"multiple"===e.type&&(1===e.months?(console.warn("The value of the «months» parameter cannot be less than «2», the minimum available value will be initialized."),e.correctMonths=2):e.months>12?(console.warn("The value of the «months» parameter cannot be greater than «12», the maximum available value will be initialized."),e.correctMonths=12):e.correctMonths=e.months)},U=e=>{N(e),_(e),p(e),D(e),M(e),s(e),k(e),"default"===e.currentType||"multiple"===e.currentType?(L(e),d(e)):"month"===e.currentType?T(e):"year"===e.currentType&&x(e)},H=(e,t)=>{if(void 0===e.selectedMonth||void 0===e.selectedYear)return;const a=e.locale.months.length-1;switch(t){case"prev":0!==e.selectedMonth?e.selectedMonth-=1:e.settings.selection.year&&(e.selectedYear-=1,e.selectedMonth=a);break;case"next":e.selectedMonth!==a?e.selectedMonth+=1:e.settings.selection.year&&(e.selectedYear+=1,e.selectedMonth=0)}e.settings.selected.month=e.selectedMonth,e.settings.selected.year=e.selectedYear,D(e),M(e),s(e),d(e)};let E=null;const A=()=>{var e;if(!E)return;const t=null==(e=E.HTMLElement)?void 0:e.querySelectorAll(`.${E.CSSClasses.dayBtnHover}`);t&&t.forEach((e=>e.classList.remove(E.CSSClasses.dayBtnHover)))},B=e=>{var t;if(!E||!E.selectedDates)return;const s=i(e);if(E.rangeDisabled&&E.rangeDisabled.includes(s))return;const a=null==(t=E.HTMLElement)?void 0:t.querySelectorAll(`[data-calendar-day="${s}"]`);null==a||a.forEach((e=>{e.classList.add(E.CSSClasses.dayBtnHover)}))},P=e=>{if(!e.target||!E||!E.selectedDates)return;if(!e.target.closest(`.${E.CSSClasses.days}`))return void A();const t=e.target.dataset.calendarDay;if(!t)return;A();const s=new Date(Date.UTC(new Date(E.selectedDates[0]).getUTCFullYear(),new Date(E.selectedDates[0]).getUTCMonth(),new Date(E.selectedDates[0]).getUTCDate())),a=new Date(Date.UTC(new Date(t).getUTCFullYear(),new Date(t).getUTCMonth(),new Date(t).getUTCDate()));if(a>s)for(let e=s;e<=a;e.setUTCDate(e.getUTCDate()+1))B(e);else for(let e=s;e>=a;e.setUTCDate(e.getUTCDate()-1))B(e)},F=e=>{E&&"Escape"===e.key&&(E.selectedDates=[],E.HTMLElement.removeEventListener("mousemove",P),document.removeEventListener("keydown",F),U(E))},O=e=>{e&&e.selectedDates&&(E=e,e.selectedDates[0]&&e.selectedDates.length<=1?(e.HTMLElement.addEventListener("mousemove",P),document.addEventListener("keydown",F),e.settings.range.disableGaps&&(()=>{var e;if(!E||!(null==(e=E.selectedDates)?void 0:e[0])||!E.rangeDisabled||E.rangeDisabled.length<2)return;const t=new Date(E.selectedDates[0]);let s=null,a=null;E.rangeDisabled.sort(((e,t)=>+new Date(e)-+new Date(t)));for(let e=0;e<E.rangeDisabled.length;e++){const l=new Date(E.rangeDisabled[e]);if(!(t>=l)){a=l;break}s=l}s&&(s=new Date(s.setDate(s.getDate()+1)),E.rangeMin=i(s)),a&&(a=new Date(a.setDate(a.getDate()-1)),E.rangeMax=i(a))})()):(e.HTMLElement.removeEventListener("mousemove",P),document.removeEventListener("keydown",F),e.settings.range.disableGaps&&E&&(E.rangeMin=E.settings.range.min,E.rangeMax=E.settings.range.max,E.settings.range.disablePast&&new Date(E.settings.range.min)<E.date.today&&(E.rangeMin=i(E.date.today)))))},K=e=>{e.HTMLElement.addEventListener("click",(t=>{const s=t.target,a=s.closest(`.${e.CSSClasses.arrow}`),l=s.closest(`.${e.CSSClasses.arrowPrev}`),n=s.closest(`.${e.CSSClasses.arrowNext}`),r=s.closest(`.${e.CSSClasses.dayBtn}`),c=s.closest(`.${e.CSSClasses.dayBtnPrev}`),o=s.closest(`.${e.CSSClasses.dayBtnNext}`),u=s.closest(`.${e.CSSClasses.weekNumber}`),v=s.closest(`.${e.CSSClasses.year}`),g=s.closest(`.${e.CSSClasses.yearsYear}`),m=s.closest(`.${e.CSSClasses.month}`),y=s.closest(`.${e.CSSClasses.monthsMonth}`);a&&"year"!==e.currentType&&"month"!==e.currentType&&H(e,s.dataset.calendarArrow),a&&e.actions.clickArrow&&e.actions.clickArrow(t,Number(e.selectedYear),Number(e.selectedMonth)),(()=>{if(e.settings.selection.day&&["single","multiple","multiple-ranged"].includes(e.settings.selection.day)&&r){switch(e.settings.selection.day){case"single":e.selectedDates&&r&&r.dataset.calendarDay&&(r.classList.contains(e.CSSClasses.dayBtnSelected)?e.selectedDates.splice(e.selectedDates.indexOf(r.dataset.calendarDay),1):(e.selectedDates=[],e.selectedDates.push(r.dataset.calendarDay)));break;case"multiple":e.selectedDates&&r&&r.dataset.calendarDay&&(r.classList.contains(e.CSSClasses.dayBtnSelected)?e.selectedDates.splice(e.selectedDates.indexOf(r.dataset.calendarDay),1):e.selectedDates.push(r.dataset.calendarDay));break;case"multiple-ranged":(()=>{if(e.selectedDates&&r&&r.dataset.calendarDay){if(e.selectedDates.length<=1&&e.selectedDates[0]&&e.selectedDates[0].includes(r.dataset.calendarDay)?e.selectedDates=[]:(e.selectedDates.length>1&&(e.selectedDates=[]),e.selectedDates.push(r.dataset.calendarDay)),e.selectedDates[1]){const t=new Date(Date.UTC(new Date(e.selectedDates[0]).getUTCFullYear(),new Date(e.selectedDates[0]).getUTCMonth(),new Date(e.selectedDates[0]).getUTCDate())),s=new Date(Date.UTC(new Date(e.selectedDates[1]).getUTCFullYear(),new Date(e.selectedDates[1]).getUTCMonth(),new Date(e.selectedDates[1]).getUTCDate())),a=t=>{if(!e.selectedDates)return;const s=i(t);e.rangeDisabled&&e.rangeDisabled.includes(s)||e.selectedDates.push(s)};if(e.selectedDates=[],s>t)for(let e=t;e<=s;e.setUTCDate(e.getUTCDate()+1))a(e);else for(let e=t;e>=s;e.setUTCDate(e.getUTCDate()-1))a(e)}O(e)}})()}e.actions.clickDay&&e.actions.clickDay(t,e.selectedDates),c?H(e,"prev"):o?H(e,"next"):d(e)}})(),(()=>{var s;if(!e.settings.visibility.weekNumbers||!u||!e.actions.clickWeekNumber)return;const a=null==(s=e.HTMLElement)?void 0:s.querySelectorAll("[data-calendar-week-number]");if(!a)return;const l=Number(u.innerText),n=Number(u.dataset.calendarYearWeek),i=[...a].filter((e=>Number(e.dataset.calendarWeekNumber)===l));e.actions.clickWeekNumber(t,l,i,n)})(),(()=>{if(e.settings.selection.year&&"multiple"!==e.currentType)if(a&&"year"===e.currentType){if(void 0===e.viewYear)return;n?e.viewYear+=15:l&&(e.viewYear-=15),x(e)}else if("year"!==e.currentType&&v)x(e);else if("year"===e.currentType&&v)e.currentType=e.type,U(e);else if(g){if(void 0===e.selectedMonth||!e.dateMin||!e.dateMax)return;e.selectedYear=Number(g.dataset.calendarYear),e.currentType=e.type,e.selectedMonth<e.dateMin.getUTCMonth()&&e.selectedYear===e.dateMin.getUTCFullYear()&&(e.settings.selected.month=e.dateMin.getUTCMonth()),e.selectedMonth>e.dateMax.getUTCMonth()&&e.selectedYear===e.dateMax.getUTCFullYear()&&(e.settings.selected.month=e.dateMax.getUTCMonth()),e.actions.clickYear&&e.actions.clickYear(t,e.selectedYear),e.settings.selected.year=e.selectedYear,U(e)}})(),e.settings.selection.month&&"multiple"!==e.currentType&&("month"!==e.currentType&&m?T(e):"month"===e.currentType&&m?(e.currentType=e.type,U(e)):y&&(e.selectedMonth=Number(y.dataset.calendarMonth),e.currentType=e.type,e.actions.clickMonth&&e.actions.clickMonth(t,e.selectedMonth),e.settings.selected.month=e.selectedMonth,U(e)))}))},q=e=>{e.HTMLElement&&(U(e),K(e))},W=e=>`\n\t<div class="${e.header}">\n\t\t<#ArrowPrev />\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t\t<#ArrowNext />\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<#WeekNumbers />\n\t\t<div class="${e.content}">\n\t\t\t<#Week />\n\t\t\t<#Days />\n\t\t</div>\n\t</div>\n\t<#ControlTime />\n`,I=e=>`\n\t<div class="${e.controls}">\n\t\t<#ArrowPrev />\n\t\t<#ArrowNext />\n\t</div>\n\t<div class="${e.grid}">\n\t\t<#Multiple>\n\t\t\t<div class="${e.column}">\n\t\t\t\t<div class="${e.header}">\n\t\t\t\t\t<div class="${e.headerContent}">\n\t\t\t\t\t\t<#Month />\n\t\t\t\t\t\t<#Year />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="${e.wrapper}">\n\t\t\t\t\t<#WeekNumbers />\n\t\t\t\t\t<div class="${e.content}">\n\t\t\t\t\t\t<#Week />\n\t\t\t\t\t\t<#Days />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<#/Multiple>\n\t</div>\n\t<#ControlTime />\n`,j=e=>`\n\t<div class="${e.header}">\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<div class="${e.content}">\n\t\t\t<#Months />\n\t\t</div>\n\t</div>\n`,R=e=>`\n\t<div class="${e.header}">\n\t\t<#ArrowPrev />\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t\t<#ArrowNext />\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<div class="${e.content}">\n\t\t\t<#Years />\n\t\t</div>\n\t</div>\n`,G={calendar:"vanilla-calendar",calendarDefault:"vanilla-calendar_default",calendarMultiple:"vanilla-calendar_multiple",calendarMonth:"vanilla-calendar_month",calendarYear:"vanilla-calendar_year",controls:"vanilla-calendar-controls",grid:"vanilla-calendar-grid",column:"vanilla-calendar-column",header:"vanilla-calendar-header",headerContent:"vanilla-calendar-header__content",month:"vanilla-calendar-month",monthDisabled:"vanilla-calendar-month_disabled",year:"vanilla-calendar-year",yearDisabled:"vanilla-calendar-year_disabled",arrow:"vanilla-calendar-arrow",arrowPrev:"vanilla-calendar-arrow_prev",arrowNext:"vanilla-calendar-arrow_next",wrapper:"vanilla-calendar-wrapper",content:"vanilla-calendar-content",week:"vanilla-calendar-week",weekDay:"vanilla-calendar-week__day",weekDayWeekend:"vanilla-calendar-week__day_weekend",days:"vanilla-calendar-days",daysSelecting:"vanilla-calendar-days_selecting",months:"vanilla-calendar-months",monthsSelecting:"vanilla-calendar-months_selecting",monthsMonth:"vanilla-calendar-months__month",monthsMonthSelected:"vanilla-calendar-months__month_selected",monthsMonthDisabled:"vanilla-calendar-months__month_disabled",years:"vanilla-calendar-years",yearsSelecting:"vanilla-calendar-years_selecting",yearsYear:"vanilla-calendar-years__year",yearsYearSelected:"vanilla-calendar-years__year_selected",yearsYearDisabled:"vanilla-calendar-years__year_disabled",time:"vanilla-calendar-time",timeContent:"vanilla-calendar-time__content",timeHours:"vanilla-calendar-time__hours",timeMinutes:"vanilla-calendar-time__minutes",timeKeeping:"vanilla-calendar-time__keeping",timeRanges:"vanilla-calendar-time__ranges",timeRange:"vanilla-calendar-time__range",day:"vanilla-calendar-day",daySelected:"vanilla-calendar-day_selected",daySelectedFirst:"vanilla-calendar-day_selected-first",daySelectedLast:"vanilla-calendar-day_selected-last",daySelectedIntermediate:"vanilla-calendar-day_selected-intermediate",dayPopup:"vanilla-calendar-day__popup",dayBtn:"vanilla-calendar-day__btn",dayBtnPrev:"vanilla-calendar-day__btn_prev",dayBtnNext:"vanilla-calendar-day__btn_next",dayBtnToday:"vanilla-calendar-day__btn_today",dayBtnSelected:"vanilla-calendar-day__btn_selected",dayBtnHover:"vanilla-calendar-day__btn_hover",dayBtnDisabled:"vanilla-calendar-day__btn_disabled",dayBtnIntermediate:"vanilla-calendar-day__btn_intermediate",dayBtnWeekend:"vanilla-calendar-day__btn_weekend",dayBtnHoliday:"vanilla-calendar-day__btn_holiday",weekNumbers:"vanilla-calendar-week-numbers",weekNumbersTitle:"vanilla-calendar-week-numbers__title",weekNumbersContent:"vanilla-calendar-week-numbers__content",weekNumber:"vanilla-calendar-week-number",isFocus:"vanilla-calendar-is-focus"};var z=Object.defineProperty,V=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;class Z{constructor(e,t){var s,a,l,n,i,d,r,c,o,u,v,g,m,y,C,S,h,b,p,D,M,T,w,f,$,k,L,x,_,Y,N,H,E,A,B,P,F,O,K,z,Z,ee,te,se,ae,le,ne,ie,de,re,ce,oe,ue,ve,ge,me,ye,Ce,Se,he,be,pe,De,Me,Te,we,fe,$e,ke,Le,xe,_e,Ye,Ne,Ue,He,Ee,Ae,Be,Pe,Fe,Oe,Ke,qe,We,Ie,je,Re,Ge,ze,Ve,Je,Qe,Xe,Ze,et,tt,st,at,lt,nt,it,dt,rt,ct,ot,ut,vt,gt,mt,yt,Ct;this.update=()=>U(this),this.init=()=>q(this),this.HTMLElement="string"==typeof e?document.querySelector(e):e,this.HTMLElement&&(this.type=null!=(s=null==t?void 0:t.type)?s:"default",this.months=null!=(a=null==t?void 0:t.months)?a:2,this.date={min:null!=(n=null==(l=null==t?void 0:t.date)?void 0:l.min)?n:"1970-01-01",max:null!=(d=null==(i=null==t?void 0:t.date)?void 0:i.max)?d:"2470-12-31",today:null!=(c=null==(r=null==t?void 0:t.date)?void 0:r.today)?c:new Date},this.settings={lang:null!=(u=null==(o=null==t?void 0:t.settings)?void 0:o.lang)?u:"en",iso8601:null==(g=null==(v=null==t?void 0:t.settings)?void 0:v.iso8601)||g,range:{min:null!=(C=null==(y=null==(m=null==t?void 0:t.settings)?void 0:m.range)?void 0:y.min)?C:this.date.min,max:null!=(b=null==(h=null==(S=null==t?void 0:t.settings)?void 0:S.range)?void 0:h.max)?b:this.date.max,disablePast:null!=(M=null==(D=null==(p=null==t?void 0:t.settings)?void 0:p.range)?void 0:D.disablePast)&&M,disableGaps:null!=(f=null==(w=null==(T=null==t?void 0:t.settings)?void 0:T.range)?void 0:w.disableGaps)&&f,disableWeekday:null!=(L=null==(k=null==($=null==t?void 0:t.settings)?void 0:$.range)?void 0:k.disableWeekday)?L:[],disabled:null!=(Y=null==(_=null==(x=null==t?void 0:t.settings)?void 0:x.range)?void 0:_.disabled)?Y:null,enabled:null!=(E=null==(H=null==(N=null==t?void 0:t.settings)?void 0:N.range)?void 0:H.enabled)?E:null},selection:{day:null!=(P=null==(B=null==(A=null==t?void 0:t.settings)?void 0:A.selection)?void 0:B.day)?P:"single",month:null==(K=null==(O=null==(F=null==t?void 0:t.settings)?void 0:F.selection)?void 0:O.month)||K,year:null==(ee=null==(Z=null==(z=null==t?void 0:t.settings)?void 0:z.selection)?void 0:Z.year)||ee,time:null!=(ae=null==(se=null==(te=null==t?void 0:t.settings)?void 0:te.selection)?void 0:se.time)&&ae,controlTime:null!=(ie=null==(ne=null==(le=null==t?void 0:t.settings)?void 0:le.selection)?void 0:ne.controlTime)?ie:"all",stepHours:null!=(ce=null==(re=null==(de=null==t?void 0:t.settings)?void 0:de.selection)?void 0:re.stepHours)?ce:1,stepMinutes:null!=(ve=null==(ue=null==(oe=null==t?void 0:t.settings)?void 0:oe.selection)?void 0:ue.stepMinutes)?ve:1},selected:{dates:null!=(ye=null==(me=null==(ge=null==t?void 0:t.settings)?void 0:ge.selected)?void 0:me.dates)?ye:null,month:null!=(he=null==(Se=null==(Ce=null==t?void 0:t.settings)?void 0:Ce.selected)?void 0:Se.month)?he:null,year:null!=(De=null==(pe=null==(be=null==t?void 0:t.settings)?void 0:be.selected)?void 0:pe.year)?De:null,holidays:null!=(we=null==(Te=null==(Me=null==t?void 0:t.settings)?void 0:Me.selected)?void 0:Te.holidays)?we:null,time:null!=(ke=null==($e=null==(fe=null==t?void 0:t.settings)?void 0:fe.selected)?void 0:$e.time)?ke:null},visibility:{monthShort:null==(_e=null==(xe=null==(Le=null==t?void 0:t.settings)?void 0:Le.visibility)?void 0:xe.monthShort)||_e,weekNumbers:null!=(Ue=null==(Ne=null==(Ye=null==t?void 0:t.settings)?void 0:Ye.visibility)?void 0:Ne.weekNumbers)&&Ue,weekend:null==(Ae=null==(Ee=null==(He=null==t?void 0:t.settings)?void 0:He.visibility)?void 0:Ee.weekend)||Ae,today:null==(Fe=null==(Pe=null==(Be=null==t?void 0:t.settings)?void 0:Be.visibility)?void 0:Pe.today)||Fe,disabled:null!=(qe=null==(Ke=null==(Oe=null==t?void 0:t.settings)?void 0:Oe.visibility)?void 0:Ke.disabled)&&qe,daysOutside:null==(je=null==(Ie=null==(We=null==t?void 0:t.settings)?void 0:We.visibility)?void 0:Ie.daysOutside)||je}},this.locale={months:null!=(Ge=null==(Re=null==t?void 0:t.locale)?void 0:Re.months)?Ge:[],weekday:null!=(Ve=null==(ze=null==t?void 0:t.locale)?void 0:ze.weekday)?Ve:[]},this.actions={clickDay:null!=(Qe=null==(Je=null==t?void 0:t.actions)?void 0:Je.clickDay)?Qe:null,clickWeekNumber:null!=(Ze=null==(Xe=null==t?void 0:t.actions)?void 0:Xe.clickWeekNumber)?Ze:null,clickMonth:null!=(tt=null==(et=null==t?void 0:t.actions)?void 0:et.clickMonth)?tt:null,clickYear:null!=(at=null==(st=null==t?void 0:t.actions)?void 0:st.clickYear)?at:null,clickArrow:null!=(nt=null==(lt=null==t?void 0:t.actions)?void 0:lt.clickArrow)?nt:null,changeTime:null!=(dt=null==(it=null==t?void 0:t.actions)?void 0:it.changeTime)?dt:null},this.popups=null!=(rt=null==t?void 0:t.popups)?rt:null,this.CSSClasses=(()=>{const e=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&X(e,s,t[s]);if(V)for(var s of V(t))Q.call(t,s)&&X(e,s,t[s]);return e})({},G);return Object.keys(G).forEach((s=>{var a;(null==(a=null==t?void 0:t.CSSClasses)?void 0:a[s])?e[s]=t.CSSClasses[s]:e[s]=G[s]})),e})(),this.DOMTemplates={default:null!=(ot=null==(ct=null==t?void 0:t.DOMTemplates)?void 0:ct.default)?ot:W(this.CSSClasses),multiple:null!=(vt=null==(ut=null==t?void 0:t.DOMTemplates)?void 0:ut.multiple)?vt:I(this.CSSClasses),month:null!=(mt=null==(gt=null==t?void 0:t.DOMTemplates)?void 0:gt.month)?mt:j(this.CSSClasses),year:null!=(Ct=null==(yt=null==t?void 0:t.DOMTemplates)?void 0:yt.year)?Ct:R(this.CSSClasses)},this.currentType=this.type,this.selectedKeeping=null,this.userTime=!1)}}window.VanillaCalendar=Z;const ee=Z;return t})()))};