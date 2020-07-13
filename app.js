const modal = $.modal({
    title: "Модальное окно", 
    clousable: true,
    content: `
        <p>lorem some worlds now</p>
    `,
    width: '400px',
    footerBtns: [
        {text: 'ok', type:"primary", handler() {
            console.log(`ok click`);
            modal.close();
        }},
        {text: 'cancel', type:"danger", handler() {
            console.log(`cancel click`);
            modal.close();
        }},
    ]
});