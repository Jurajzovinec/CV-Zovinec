const GrountPlane = () => {
    return ( 
        <mesh receiveShadow castShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -0.65, 0]}>      
            <circleBufferGeometry attach="geometry" args={[4, 64]} />      
            <meshStandardMaterial attach="material" color="#ec6101" />    
        </mesh>
     );
}
 
export default GrountPlane;