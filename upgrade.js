class Upgrade {
    constructor(getCost, mulitiply, gainPS, getID, getTitle, getDesc) {
        this.level = new Decimal(0)

        this.cost = getCost

        this.mulitiply = mulitiply

        this.effectPS = gainPS

        this.title = getTitle
        this.description = getDesc

        this.id = getID
    }
}