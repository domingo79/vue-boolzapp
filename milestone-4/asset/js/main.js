const app = new Vue({

    el: '#app',
    data: {
        io: {
            utente: 'Domenico Santo',
            imgUtente: 'asset/img/avatar_io.jpg',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luis',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Diego',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/05/2020 15:30:55',
                        text: 'Ti va una birra stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/05/2020 15:50:00',
                        text: 'Si, ti passo a prendere io',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sara',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/05/2020 15:30:55',
                        text: 'Ti vedi con lei o vengo io a casa tua ?',
                        status: 'sent'
                    },
                    {
                        date: '10/05/2020 15:50:00',
                        text: 'Si, ci vediamo ma ti do io conferma',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samantha',
                avatar: '_7',
                visible: true,
                messages: [{}],
            },
            {
                name: 'Raffaele',
                avatar: '_8',
                visible: true,
                messages: [{}],
            }
        ],
        counter: 0,
        message: '',
        search: ''
    },
    methods: {
        sendMessage() {
            newMessage = {};
            newMessage.text = this.message;
            // formato data da jsdate
            newMessage.date = dayjs().format("DD/MM/YYYY  HH:mm:ss"),
                newMessage.status = 'sent';

            this.contacts[this.counter].messages.push(newMessage);
            this.message = '';
            // console.log(newMessage);

            setTimeout(() => {
                autoMsg = {
                    text: 'ok',
                    // formato data da jsdate
                    date: dayjs().format("DD/MM/YYYY  HH:mm:ss"),
                    status: 'received'
                };
                this.contacts[this.counter].messages.push(autoMsg);
            }, 2000)
        },

    },
    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

})