import bikegame.Thing

class BootStrap {

    def init = { servletContext ->
        for(int i = 1; i <= 50; i++) {
            def baum = new Thing(longitude: 81.22 + i, latitude: 23.123 + i, objectName: "Buchsbaum" + i)
            baum.save()
        }
    }
    def destroy = {
    }
}
