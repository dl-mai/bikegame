import bikegame.Thing

class BootStrap {

    def init = { servletContext ->
        for(int i = 1; i <= 100; i+=4) {
         for(int j = 1; j <= 100; j+=4) {
            def baum = new Thing(longitude: i, latitude: j, objectName: "Buchsbaum" + i)
            baum.save()
         }
        }
    }
    def destroy = {
    }
}
