import Vue from 'vue';
var dayjs = require('dayjs');

let app = new Vue({
    el: "#root",
    data: {
        user: {
            name: "Stefano",
            avatar: "user-avatar.png"
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'michele-avatar.webp',
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
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
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
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
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
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
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
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
            {
                name: 'Alessia',
                avatar: 'alessia-avatar.jpg',
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
                messages: [
                    {
                        date: '11:30',
                        text: 'Ti va un caffè più tardi?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '11:50',
                        text: 'Certo!',
                        status: 'sent',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Alberto',
                avatar: 'alberto-avatar.png',
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
                messages: [
                    {
                        date: '21:21',
                        text: 'Hey, mi servirebbe un favore più tardi',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '21:22',
                        text: 'Puoi aiutarmi?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '21:25',
                        text: 'Mi spiace, ora sono impegnato.',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:25',
                        text: 'Contattami più tardi',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:27',
                        text: 'Non preoccuparti',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '21:27',
                        text: 'Per che ora pensi di liberarti?',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '21:28',
                        text: 'Ti scrivo io appena posso',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:29',
                        text: 'Ok',
                        status: 'received',
                        dropdownMenu: false
                    },
                    {
                        date: '21:29',
                        text: 'A dopo!',
                        status: 'received',
                        dropdownMenu: false
                    }
                ],
            },
            {
                name: 'Laura',
                avatar: 'laura-avatar.jpg',
                lastAccess: dayjs().format("HH:mm [del] DD-MM-YYYY"),
                messages: [
                    {
                        date: '19:54',
                        text: 'Ho comprato i biglietti per il concerto',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:11',
                        text: 'Passo a prenderti domani alle 16',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:12',
                        text: 'Ci sei?',
                        status: 'sent',
                        dropdownMenu: false
                    },
                    {
                        date: '21:12',
                        text: 'Va benissimo!',
                        status: 'received',
                        dropdownMenu: false
                    },
                ],
            },
        ],
        searchInput: "",
        messageInput: "",
        indexActive: -1,
        darkMode: false,
        newMessage: false,
    },
    methods: {
        chatCloser() {
            this.indexActive = -1;
        },

        chatSelector(index) {
            this.indexActive = index;
        },

        dropdownCloser() {
            const contact = this.indexActive;

            this.contacts[contact].messages.forEach( (message) => {
                message.dropdownMenu = false;
            } );
        },

        messageDropdown(index) {

            const contact = this.indexActive;

            this.dropdownCloser();

            if (!this.contacts[contact].messages[index].dropdownMenu) {
                this.contacts[contact].messages[index].dropdownMenu = true;
            }
        },

        deleteMessage(index) {
            const contact = this.indexActive;

            this.contacts[contact].messages.splice(index, 1);
        },

        autoScrollToEnd() {

            if (this.newMessage) {
                let container = document.querySelector('.chat-list');
                let scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
                
                this.newMessage = false;
            }
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
                        text: 'Perfetto',
                        dropdownMenu: false
                    })
                    this.newMessage = true;
                }, 2000);
            }

            this.newMessage = true;
        }
    },
    updated() {
        this.autoScrollToEnd();
    }
});
