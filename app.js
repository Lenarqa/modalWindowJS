const modal = $.modal({
    title: "Модальное окно", 
    clousable: true,
    content: `
        <p>lorem some worlds now</p>
    `,
    width: '400px',
    footerBtns:[
        {text: 'ok', type:"primary", handler: "console.log(`primary-btn click`)", },
        {text: 'ok', type:"danger", handler: "console.log(`danger-btn click`)", },
    ]
});