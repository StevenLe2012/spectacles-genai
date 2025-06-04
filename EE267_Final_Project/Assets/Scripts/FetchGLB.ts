import { Interactable } from "SpectaclesInteractionKit.lspkg/Components/Interaction/Interactable/Interactable";
import { InteractableManipulation } from "SpectaclesInteractionKit.lspkg/Components/Interaction/InteractableManipulation/InteractableManipulation";
@component
export class FetchGLB extends BaseScriptComponent {
    private SIK = require("SpectaclesInteractionKit.lspkg/SIK");
    private internetModule:InternetModule = require("LensStudio:InternetModule");
    private remoteMediaModule:RemoteMediaModule = require("LensStudio:RemoteMediaModule");
    private remoteServiceModule:RemoteServiceModule = require("LensStudio:RemoteServiceModule");
    private gestureModule = require("LensStudio:GestureModule");
    private modelUrl: string = "https://junister.github.io/trellis-glbs/model6.glb"; 
    @input()
    private modelsParent: SceneObject = null; 
    @input()
    private pbrMaterialHolder: Material = null;

    onAwake() {
        this.gestureModule
            .getPalmTapDownEvent(GestureModule.HandType.Left)
            .add(this.onPinch.bind(this));
    }

    private onPinch(/* args: PinchDownArgs */) {
        const resource = this.remoteServiceModule.makeResourceFromUrl(this.modelUrl);
        this.remoteMediaModule.loadResourceAsGltfAsset(
            resource,
            this.onDownloaded.bind(this), 
            this.onFail.bind(this)       
        );
    }

    private onDownloaded (gltfAsset) {
        const settings = GltfSettings.create();
        settings.convertMetersToCentimeters = true;
        const instantiated = gltfAsset.tryInstantiateWithSetting(
            this.modelsParent,
            this.pbrMaterialHolder,
            settings
        );

        if (instantiated) {
            print("GLB loaded and instantiated successfully.");
        } else {
            print("Failed to instantiate GLB.");
        }
        const interactable = instantiated.createComponent(Interactable.getTypeName());

        const physicsBody = instantiated.createComponent("Physics.BodyComponent");
        physicsBody.dynamic = false;

        print("Instantiated object: " + instantiated.getTypeName());
        print("Instantiated object UID: " + instantiated.uniqueIdentifier);
        var transform = instantiated.getTransform();
        print("Instantiated object transform: " + transform.toString());
        transform.setLocalScale(new vec3(50, 50, 50));
    }

    private onFail (error) {
        print("Failed to load GLB: " + error);
    }
}
