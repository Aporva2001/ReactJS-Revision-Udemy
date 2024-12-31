import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";


function ModalPage() {
    const [showModal, setshowModal] = useState(false);

    const handleClick = () =>{
        setshowModal(true);
    }
    const handleClose =() =>{
        setshowModal(false);

    }
    const actionBar= <div>
 <Button primary onClick={handleClose}>I Accept</Button>
    </div>
    const modal = <Modal onClose = {handleClose} actionBar= {actionBar}> 
    <p>
        Please read the terms 
    </p>
    </Modal>
return <div >
    <Button primary onClick={handleClick}>Open Modal</Button>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi fermentum, accumsan tellus eget, consectetur purus. Sed quis volutpat magna. Ut dictum consectetur metus eget eleifend. Ut dignissim pulvinar vestibulum. Duis vitae vulputate nisl. Curabitur quis felis neque. Duis tristique eros ipsum, sed consectetur leo dictum sit amet. Quisque mattis neque leo, sed imperdiet nisi rhoncus vitae. Aliquam vel euismod nunc. Integer quis arcu et odio efficitur vehicula at et mi. Sed imperdiet dictum sem et lobortis. Vivamus nunc nisl, auctor sit amet leo ac, ullamcorper porta quam. Proin neque diam, consectetur sed magna vel, luctus ultrices lorem. Vestibulum varius fringilla interdum. Sed auctor, purus blandit ornare ornare, purus tellus malesuada odio, vel euismod sapien orci imperdiet tortor. Mauris non venenatis urna.

Proin porta eleifend magna et facilisis. Mauris accumsan convallis eros, quis commodo mauris bibendum quis. Sed at neque metus. Etiam nec sapien massa. Praesent a dui eu lorem bibendum efficitur. Maecenas eu sapien non ex viverra venenatis sit amet in nulla. Sed vehicula, eros in finibus pretium, enim quam aliquet leo, ut ultricies velit arcu quis massa. Donec quis metus ac ipsum suscipit sollicitudin et sed lorem. Sed quis lacus dapibus, varius odio tempor, feugiat orci. Aliquam ultricies metus quis tellus aliquet gravida. Praesent mollis elit purus, in vehicula diam hendrerit a.

Integer dictum lectus est. Etiam vehicula, leo vel fermentum vulputate, augue magna porta nunc, sit amet viverra ante neque sit amet lorem. Mauris vitae vestibulum neque, commodo cursus lorem. Fusce scelerisque, urna et finibus eleifend, nibh felis ultrices justo, at venenatis tellus mauris ac mi. Cras feugiat et lacus vel tempus. Sed dapibus in leo in mattis. Nunc quis metus urna. Nullam elementum turpis et metus eleifend, non pellentesque ex fringilla. Donec vestibulum non turpis nec hendrerit.

Nulla in consectetur est. Nam luctus leo quam, eu mattis quam scelerisque aliquet. Morbi ante ipsum, aliquam quis odio at, pellentesque tempor elit. Duis rutrum sollicitudin leo sit amet rutrum. Curabitur eu pulvinar leo. Vestibulum imperdiet arcu nec neque laoreet, et luctus purus eleifend. Vivamus maximus consequat tellus a mollis. Nullam tristique vel libero eget congue. In eu porttitor nisi, aliquam lacinia sapien. Vivamus fringilla justo in metus tempus, non bibendum neque varius. Sed ac felis ut nisl vestibulum lobortis quis vitae massa. Nam dignissim eros id sapien tincidunt aliquet. Fusce est metus, lobortis in suscipit a, tristique et nisl. Sed laoreet ultrices sagittis. Vivamus ut risus nec turpis gravida euismod at eu risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Integer nec sagittis diam. Ut scelerisque turpis nec vehicula congue. Curabitur vestibulum mauris quis metus molestie volutpat. Cras eu lectus eget elit auctor finibus sed nec quam. Donec condimentum nisl in purus imperdiet placerat. Aenean ac urna cursus, viverra nisl at, bibendum nibh. Nulla ante lectus, sollicitudin vitae velit vel, mattis eleifend risus.

Curabitur tempor quis lectus maximus condimentum. Integer sit amet nunc porta, aliquam quam eget, congue nisl. Morbi varius non urna eget vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla viverra, massa ut faucibus tempor, sem mauris porta magna, nec fringilla dolor risus nec eros. Curabitur lobortis posuere ipsum. Donec fermentum in mi et ullamcorper. Maecenas fermentum tortor vulputate sapien sagittis egestas. Nulla at odio imperdiet, scelerisque mauris eget, dignissim odio.

Nam congue laoreet felis nec consequat. Aenean eget diam tellus. Sed ornare erat non malesuada iaculis. In eu commodo sapien. Aliquam faucibus dui at orci vulputate, non lacinia odio lacinia. Ut sed euismod arcu. Etiam at placerat risus. Vestibulum a tristique dolor. Proin euismod nisl vel justo viverra vehicula. Sed laoreet dignissim libero, nec malesuada diam vestibulum et. Suspendisse placerat pulvinar elementum. Donec vehicula a arcu et hendrerit. Mauris at gravida massa. Donec tempor est vehicula, fermentum nulla in, ullamcorper ligula. Donec euismod id urna eget mollis.

In viverra mi eu tortor rhoncus, id maximus quam tincidunt. Praesent ullamcorper nibh in quam aliquam volutpat. Morbi odio dolor, laoreet sed diam feugiat, finibus ultrices tellus. Praesent a lectus ut turpis vestibulum posuere eget et quam. Suspendisse tristique congue tempus. Maecenas varius, tortor ac egestas aliquet, diam nulla auctor arcu, semper volutpat risus elit ut quam. Duis eu felis in felis sollicitudin molestie vitae ac mi. Quisque efficitur commodo dui, ut viverra purus varius vel. Nulla tempus vehicula magna ultricies convallis. In at tellus mauris. Cras et dolor eget ante fringilla imperdiet non ut libero. Sed condimentum, est ut tristique fringilla, tortor tortor accumsan magna, vel varius justo tortor id magna. Ut felis magna, fringilla varius augue a, condimentum tempus velit. Vestibulum ligula magna, luctus non posuere quis, ultrices sed justo. In elementum vitae libero sed pharetra. Duis tristique, nibh vitae faucibus molestie, orci dui pulvinar diam, vitae pretium urna neque sed turpis.

Maecenas cursus pharetra nunc vitae convallis. Nam consectetur, ex a tincidunt maximus, eros nisi ornare enim, vitae mollis nulla tellus vel nibh. Cras fringilla orci a sollicitudin cursus. Suspendisse dapibus purus sit amet massa dignissim, sit amet placerat erat placerat. Duis eu ipsum laoreet dui tristique semper. Etiam euismod aliquet ligula. Mauris nec odio sem. Aenean risus velit, egestas eget sodales at, scelerisque sed mi. In vitae odio id lacus congue finibus. Morbi tempus neque sed libero vulputate congue. Vivamus a viverra nisi. Morbi accumsan tellus arcu, elementum porta massa bibendum a. Nunc lobortis quam nec turpis finibus, ut interdum purus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in purus nulla. Nullam sed urna et mi tincidunt cursus vitae ac turpis.

Aliquam vitae nibh congue, aliquam diam at, ultricies augue. Maecenas a eros vel tellus consequat venenatis quis in nisl. Vestibulum vel viverra leo. Vestibulum at condimentum elit. Donec auctor nunc quam, tempus eleifend ligula pharetra ut. Fusce convallis nunc blandit neque semper, at lobortis erat tempor. Aliquam lobortis libero mauris, ut porttitor mi auctor et. Mauris magna diam, gravida fermentum mollis non, viverra in urna. Quisque gravida quam sit amet libero accumsan auctor. Aliquam id faucibus risus. Vestibulum id tortor vestibulum, sagittis odio pharetra, dapibus ante. Aenean vel dolor in magna aliquam elementum id eget elit. Donec sit amet dolor euismod, dictum magna vel, elementum velit. Curabitur suscipit ac sem lacinia pharetra. Nulla eu lacus leo.
    {showModal && modal}
</div>
}
export default ModalPage;