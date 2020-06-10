namespace SpriteKind {
    export const location = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    Score += 10
})
function clyde_CollisionDetection () {
    clyde_possible_dir = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))) {
        clyde_possible_dir.push(sprites.heading(Clyde))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) + 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) - 90, 360))
    }
    clyde_direction = arrays.choose(clyde_possible_dir)
}
function clyde_setVelocity () {
    if (clyde_direction == 0) {
        Clyde.setVelocity(0, -10)
    } else if (clyde_direction == 90) {
        Clyde.setVelocity(10, 0)
    } else if (clyde_direction == 180) {
        Clyde.setVelocity(0, 10)
    } else if (clyde_direction == 270) {
        Clyde.setVelocity(-10, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    Score += 1
    number_pellets += -1
    if (number_pellets == 0) {
        pause(500)
        game.over(true, effects.confetti)
    }
})
let clyde_direction = 0
let clyde_possible_dir: number[] = []
let Score = 0
let Clyde: Sprite = null
let number_pellets = 0
let clyde_flag_1 = 0
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010302020202020202020202020203010102010101020101010102010101020101020101010201000001020101010201010202020202010000010202020202010101010101020104040102010101010102020202020202020202020202020202010101010102010101010201010101010101010101020101010102010101010101020202020201010101020202020201010201010102010101010201010102010102020202020202020202020202020101020101010201010101020101010201010201010102010101010201010102010103020202020202020202020202030101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . 2 2 2 . 2 . . 2 . 2 2 2 . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 2 2 2 2 . 2 . . 2 . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
let Pacman = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . . 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 3))
number_pellets = tiles.getTilesByType(myTiles.tile2).length
Clyde = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
4 . . . 4 . . . . 4 . . . 4 . . 
`, SpriteKind.Enemy)
tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
Clyde.setVelocity(0, -10)
let clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
let clydePrevColumn = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
game.onUpdate(function () {
    sprites.updateheading(Clyde)
    if (scene.spriteContainedWithinTile(Clyde) && (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevRow || scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevColumn)) {
        clyde_CollisionDetection()
        clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
        clydePrevColumn = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
        clyde_setVelocity()
    }
})
game.onUpdate(function () {
    controller.moveSprite(Pacman, 50, 50)
    scene.cameraFollowSprite(Pacman)
    if (Pacman.x == 7 && controller.left.isPressed()) {
        Pacman.setPosition(249, Pacman.y)
    } else if (Pacman.x == 249 && controller.right.isPressed()) {
        Pacman.setPosition(7, Pacman.y)
    }
})
