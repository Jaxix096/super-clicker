function GameIntial() {
    this.title = "Super Clicker"
    this.version = "1.0.0"

    this.layers = []

    this.tracked = null

    this.achievements = [
        new Achievement("You Played!", true)
    ]
}