import { classNames, select } from './settings.js';
import DatePicker from './components/DatePicker.js';
import HourPicker from './components/HourPicker.js';

{
  'use strict';

  const sidebarToggler = function(){

    const sidebarContainer = document.querySelector(select.containerOf.sidebar);

    if(window.innerWidth <= 576) {
      const menuToggler = sidebarContainer.querySelector(select.sidebar.menuToggler);
  
      menuToggler.addEventListener('click', function(event){
        event.preventDefault();
  
        sidebarContainer.classList.toggle(classNames.sidebar.active);
      });

    }
  };

  sidebarToggler();


  const navPageLinksHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const pageLink = clickedElement.childNodes[3];
    //console.log(pageLink);

    const navLinks = document.querySelectorAll(select.sidebar.listItem);
    //console.log(navLinks);

    for(let navLink of navLinks){
      navLink.classList.remove(classNames.sidebar.activeLink);
    }

    clickedElement.classList.add(classNames.sidebar.activeLink);

    const activePages = document.querySelectorAll(select.all.pages);
    //console.log(activePages);

    for(let activePage of activePages){
      activePage.classList.remove(classNames.sidebar.activeLink);
    }

    const pageSelector = pageLink.getAttribute('href');
    //console.log(pageSelector);

    const targetPage = document.querySelector(pageSelector);
    //console.log(targetPage);

    targetPage.classList.add(classNames.sidebar.activeLink);
  };


  const showPage = function(){
    const navLinks = document.querySelectorAll(select.sidebar.listItem);

    for(let navLink of navLinks){
      navLink.addEventListener('click', navPageLinksHandler);
    }
  };

  showPage();


  const walletDropdown = function(){

    const allWalletDropdown = document.querySelectorAll(select.containerOf.walletDropdown);

    for(let walletDropdown of allWalletDropdown){

      walletDropdown.addEventListener('click', function(){
        walletDropdown.classList.toggle(classNames.walletDropdown.active);
      });

      // if(window.innerWidth <= 576) {
      //   walletDropdown.addEventListener('click', function(){
      //     walletDropdown.classList.toggle(classNames.walletDropdown.active);
      //   });
      // }
      // else {
      //   walletDropdown.addEventListener('click', function(){
      //     walletDropdown.classList.toggle(classNames.walletDropdown.active);
      //   });
      // }
    }
  };

  walletDropdown();


  const initActions = function(){
    const datePickerContainer = document.querySelectorAll(select.widgets.datePicker.wrapper);

    for(let datePicker of datePickerContainer){
      // eslint-disable-next-line no-unused-vars
      const datePickerInstance = new DatePicker(datePicker);

    }

    const hourPickerContainer = document.querySelector(select.widgets.hourPicker.wrapper);
    // eslint-disable-next-line no-unused-vars
    const hourPicker = new HourPicker(hourPickerContainer);

  };

  initActions();


  const initChart = function(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var delayed;
    // eslint-disable-next-line no-undef, no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
          {
            label: 'Signups',
            pointStyle: 'circle',
            data: [350, 200, 220, 370, 410, 390, 290, 270, 295, 320],
            backgroundColor: ['#56819f'],
            borderColor: ['#56819f'],
          },
          {  
            label: 'FTD',
            data: [400, 170, 310, 240, 450, 110, 200, 500, 310, 300],
            backgroundColor: ['#f58220'],
            borderColor: ['#f58220'],
          },
          {  
            label: 'Earned',
            data: [350, 200, 220, 370, 450, 110, 200, 500, 270, 290],
            backgroundColor: ['#04ae00'],
            borderColor: ['#04ae00'],
            hidden: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            bottom: 50,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 600,
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
              font:{
                size: 14,
                color: '#a6a6a6',
                lineHeight: 1.7,
              },
            },
          },
          datalabels: {
            listeners: {
              enter: function(context) {
                context.hovered = true;
                return true;
              },
              leave: function(context) {
                context.hovered = false;
                return true;
              },
              click: function(context) {
                context.backgroundColor === 'green';
              }
            }
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 150 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    });
  };

  initChart();

  const tableHeaderToggler = function(){
    //TODO: add filtering of data table (e.g. smallest to largest)

    const tableHeaderContainer = document.querySelectorAll(select.containerOf.tableHeader);

    //console.log(tableHeaderContainer);

    for(let tableHeader of tableHeaderContainer){
      tableHeader.addEventListener('click', function(){
        tableHeader.classList.toggle(classNames.table.active);
      });
    }

  };

  tableHeaderToggler();

  const paginationActive = function(){
    const paginationContainer = document.querySelectorAll(select.containerOf.pagination);
    //console.log(paginationContainer);

    for (let container of paginationContainer){
      const pagLinks = container.querySelectorAll(select.all.links);
      //console.log(pagLinks);

      for(let pagLink of pagLinks){
        if(pagLink.tagName === 'A'){
          
          container.addEventListener('click', function(event){
            event.preventDefault();
              
            const clickedElement = event.target;
            //console.log(clickedElement);
              
            if(clickedElement === pagLink && !pagLink.classList.contains(classNames.pagination.active)) {
              clickedElement.classList.add(classNames.pagination.active);
                
            } else {
              pagLink.classList.remove(classNames.pagination.active);
                
            }
          });
        }
      }
    }

    //TODO: add js for changing active link after clicking left/right arrow
  };

  paginationActive();

  function showPassword() {

    const togglePassword = document.querySelector('#togglePassword');
    const passwordInputOne = document.querySelector('#password1');
    const passwordInputTwo = document.querySelector('#passwordRepeat');
    //console.log(togglePassword, passwordInputOne, passwordInputTwo);

    togglePassword.addEventListener('click', function () {
      // toggle the type attribute
      const typeOne = passwordInputOne.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInputOne.setAttribute('type', typeOne);

      const typeTwo = passwordInputTwo.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInputTwo.setAttribute('type', typeTwo);
      // toggle the eye / eye slash icon
      this.classList.toggle('fa-eye-slash');
      this.classList.toggle('fa-eye');
    });

  }

  showPassword();

}