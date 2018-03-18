const ERRORS = {
    required: 'This field is required.',
    minLength: 'The length should be minimum 8 characters.',
    invalidEmail: 'This is not a valid email address.'
}

new Vue({
    el: '#form',
    data: {
        username: '',
        email: '',
        emailFeedback: '',
        password: '',
        passwordFeedback: '',
        submition: false
    },
    computed: {
        wrongUsername() {
            return this.username === ''
        },
        wrongEmail() {
            if (this.email === '') {
                this.emailFeedback = ERRORS.required
                return true
            } else if (!this.isEmail(this.email)) {
                this.emailFeedback = ERRORS.invalidEmail
                return true
            }
            return false
        },
        wrongPassword() {
            if (this.password === '') {
                this.passwordFeedback = ERRORS.required
                return true
            } else if (this.password.length < 8) {
                this.passwordFeedback = ERRORS.minLength
                return true
            }
            return false
        }
    },
    methods: {
        // Reference: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
        isEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
        },
        validateForm(event) {
            this.submition = true
            if (this.wrongUsername || this.wrongEmail || this.wrongPassword)
                event.preventDefault()
        }
    }
})