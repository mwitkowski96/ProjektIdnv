export const select = {
  containerOf: {
    sidebar: '.column .navigation',
    topbar: '.topbar',
    datePicker: '.date-picker',
    walletDropdown: '.wallet-dropdown',
    tableHeader: '.table__large thead th',
    pagination: '.pagination',
  },
  sidebar: {
    menuToggler: '.logo-container',
    listItem: '.sidebar-nav li',
  },
  all: {
    links: '.link',
    formInputs: 'input, select',
    pages: '.page',
    listItems: 'li',
  },
  widgets: {
    amount: {
      input: 'input.amount',
      linkDecrease: 'a[href="#less"]',
      linkIncrease: 'a[href="#more"]',
    },
    datePicker: {
      wrapper: '.date-picker .input-container',
      inputStart: `input[name="dateStart"]`,
      inputEnd: `input[name="dateEnd"]`,
      clearButton: '.clear_button',
    },
    hourPicker: {
      wrapper: '.hour-picker',
      input: 'input[type="range"]',
      output: '.output',
    },
  }
};

export const classNames = {
  sidebar: {
    active: 'active',
    activeLink: 'active',
  },
  walletDropdown: {
    active: 'active',
  },
  table: {
    active: 'active',
  },
  pagination: {
    active: 'active',
  },
};

export const settings = {
  amountWidget: {
    defaultValue: 1,
    defaultMin: 1,
    defaultMax: 9,
  },
  datePicker: {
    minDaysInPast: 60,
    maxDaysInFuture: 14,
  },
  hours: {
    initialValue: 104,
    maxValue: 168,
  },
  db: {
    url: '//localhost:3131',
  },
};