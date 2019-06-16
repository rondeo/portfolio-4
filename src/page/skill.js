import React from "react";
import SkillBox from "../component/skill-component";
import PageHeader from "../component/page-header";
export default class Header extends React.Component {
  render() {
    const skillList = [
      {
        name:'html',
        title:'HTML<span class="point-red">5</span>',
        skill:[
          '웹접근성',
          '시맨틱 마크업',
          'JSX'
        ],
        list:[
          '시맨틱 마크업 <strong>숙달</strong>',
          '삼성 프로젝트 웹 접근성 검수 통과 <strong>경험</strong>',
          'React의 JSX 문법 <strong>학습</strong>',
          'Haml,pug,jade 문법 <strong>학습</strong>'
        ]
      },
      {
        name:'css',
        title:'<span class="point-red">C</span>SS',
        skill:[
          'Flex',
          'AnimateFrame',
          'Media query'
        ],
        list:[
          'CSS Media query를 이용한 반응형 <strong>숙달</strong>',
          'CSS3 Transition,Animation Frame을 이용한 Motion <strong>숙달</strong>',
          'Flex를 이용한 레이아웃 배치 경험',
          'Cross Browsing <strong>숙달</strong>'
        ]
      },
      {
        name:'js',
        title:'<span class="point-red">J</span>S',
        skill:[
          'ES6',
          'React',
          'Vanilla'
        ],
        list:[
          'React, React Native <strong>학습</strong>',
          'ES6 - Class, ArrowFunction, Promise 사용 <strong>경험</strong>',
          'OOP와 functional Programing <strong>학습</strong>',
          'jQuery Plugin 제작 <strong>경험</strong>',
          'Vanilla Javascript 꾸준한 <strong>학습</strong>'
        ]
      },
      {
        name:'etc',
        title:'E<span class="point-red">t</span>c',
        skill:[
          'GIT',
          'Mac',
          'VScode'
        ],
        list:[
          `GIT - Brunch, Merge, PullRequest <strong>경험</strong>`,
          'Mac OS, Window OS <strong>숙달</strong>',
          'VScode, Atom, Sublime 등 다양한 에디터 사용 <strong>경험</strong>',
        ]
      }
    ]
    const title = 'I <span class="point-red">HAVE</span> THE <span class="point-red">SKILL</span>';
    const text = [`학습하여 개인프로젝트에만 사용한것은 <strong class="point-red">'학습'</strong>으로`,`실무 사용경험이 있는것은 <strong class="point-red">'경험'</strong>으로`,`실무에서 자주 사용하여 숙달된것은 <strong class="point-red">'숙달'</strong>로 표시`];
    return (
      <div className="page skill">
        <PageHeader color="red" headTitle={title} headTxt={text}/>
        <div className="skill-wrap">
          <div className="inner">
            {skillList.map((item,index) => {
              return <SkillBox key={index} boxName={item.name} title={item.title} skill={item.skill} skillList={item.list}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}

