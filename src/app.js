import Vue from 'vue';
var dayjs = require('dayjs');

let app = new Vue({
    el: "#root",
    data: {
        user: {
            name: "Nome Utente",
            avatar: "user-avatar.png"
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'michele-avatar.webp',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '16:15',
                        text: 'Tutto fatto!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'fabio-avatar.png',
                visible: true,
                messages: [
                    {
                        date: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'samuele-avatar.png',
                visible: true,
                messages: [
                    {
                        date: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '16:15',
                        text: 'Ah scusa!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'luisa-avatar.png',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
        ],
        searchInput: "",
        messageInput: "",
        indexActive: -1,
        darkMode: true,
    },
    methods: {
        chatCloser() {
            this.indexActive = -1;
        },

        chatSelector(index) {
            this.indexActive = index;
        },

        messageDropdown(index) {
            const contact = this.indexActive;

            this.contacts[contact].messages.forEach( (message) => {
                message.dropdownMenu = false;
            } );

            this.contacts[contact].messages[index].dropdownMenu = true;
        },

        deleteMessage(index) {
            const contact = this.indexActive;

            this.contacts[contact].messages.splice(index, 1);
        },

        messageSender() {
            const contact = this.indexActive;
            if (this.messageInput != "") {
                this.contacts[contact].messages.push({
                    date: dayjs().format("HH:mm"),
                    text: this.messageInput,
                    status: 'sent',
                    dropdownMenu: false
                });

                this.messageInput = "";

                setTimeout( () => {
                    this.contacts[contact].messages.push({
                        date: dayjs().format("HH:mm"),
                        text: "Ok!",
                        status: 'received',
                        dropdownMenu: false
                    })
                }, 2000);
            }
        }
    },
});
