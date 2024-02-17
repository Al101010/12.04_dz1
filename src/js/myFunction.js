export default function healthColor(user) {
    if (user.health < 15){
        return 'critical';
    }
    if  (user.health >= 15 && user.health <= 50 ){
        return 'wounded';
    }
    if  (user.health > 50 ){
        return 'healthy';
    }
}

