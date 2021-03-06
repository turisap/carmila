/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';

const About = () => (
<div>
    <section className="about__heading">
        <div className="container-fluid">
            <h2 className="page-header">We do our best to ensure your meal is always on time</h2>
        </div>
    </section>
    <div className="container-fluid">
        <section className="about__info">
            <div className="about__img-holder">
                <img id="about_imgmain" src="./img/pages/about.jpg"/>
            </div>
            <div className="about__text-holder">
                <p className="about__text">Sed malesuada id dui sed imperdiet. Pellentesque sit amet diam id dolor sagittis tristique ut nec tellus. Suspendisse commodo bibendum turpis non posuere. Vestibulum eget velit massa. Integer fringilla metus tortor, pellentesque ultricies lorem fringilla quis. Aliquam pulvinar dolor quis justo hendrerit porta. Nulla ipsum urna, efficitur eget metus id, volutpat dapibus nisl. Donec facilisis turpis vel nisi porta ornare. Sed lacinia convallis orci vitae egestas. Aenean accumsan hendrerit risus, sodales varius nisi laoreet ut. Proin finibus accumsan nunc, in varius nunc.</p>
                <p className="about__text">Cras gravida elit mi, ut finibus neque molestie bibendum. Vestibulum ultricies tristique tortor non mollis. Morbi consectetur nunc nisi, sed congue ante finibus non. Etiam nunc nisl, suscipit vitae sem a, scelerisque facilisis elit. Fusce viverra ligula eu blandit finibus. Aliquam eu dui auctor, cursus libero in, tincidunt ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vel ex nibh. Nullam aliquam tincidunt sapien porta aliquet. Curabitur eget est arcu.</p>
                <p className="about__text">Duis mauris purus, varius tincidunt porta ac, feugiat eget lectus. Pellentesque nunc augue, molestie sed commodo eget, ultricies eu dui. Fusce cursus vehicula aliquam. Suspendisse potenti. Morbi eu fringilla neque. Phasellus eget justo scelerisque, pretium nibh at, aliquam nisi. Cras leo enim, fermentum vestibulum sagittis sed, interdum sed nisi. Sed bibendum, sem in vulputate rhoncus, nisi elit lobortis metus, eget feugiat metus urna vitae ante. Phasellus commodo vestibulum maximus.</p>
            </div>
        </section>
    </div>
</div>
);

export default About;